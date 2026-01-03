#!/usr/bin/env node

/*
  Converts `export const ...` values in an ES module file (like `data.js`) into JSON files.

  Usage:
    node scripts/export-data-to-json.js [inputFile] [outputDir]

  Defaults:
    inputFile: ./data.js
    outputDir:  ./data-json
*/

const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const args = { inputFile: "data.js", outputDir: "data-json" };

  const positional = [];
  for (const a of argv) {
    if (a === "-h" || a === "--help") args.help = true;
    else positional.push(a);
  }

  if (positional[0]) args.inputFile = positional[0];
  if (positional[1]) args.outputDir = positional[1];
  return args;
}

function discoverExportedConstNames(sourceText) {
  const names = [];
  const re = /export\s+const\s+([A-Za-z_$][\w$]*)\s*=/g;
  let m;
  while ((m = re.exec(sourceText)) !== null) {
    names.push(m[1]);
  }
  return names;
}

function loadExportedValuesFromFile(inputFilePath) {
  const absPath = path.resolve(process.cwd(), inputFilePath);
  const source = fs.readFileSync(absPath, "utf8");

  if (/(^|\n)\s*import\s/m.test(source)) {
    throw new Error(
      "This script only supports files that do not use `import ...`. " +
        "Please remove imports or inline the data first."
    );
  }

  const exportNames = discoverExportedConstNames(source);
  if (exportNames.length === 0) {
    throw new Error(
      `No \"export const\" declarations found in ${inputFilePath}.`
    );
  }

  // Turn ESM exports into plain declarations so we can evaluate safely inside a function.
  // We only *extract* `export const ...`, but `data.js` also contains `export function ...`.
  const transformed = source
    .replace(/\bexport\s+const\s+/g, "const ")
    .replace(/\bexport\s+function\s+/g, "function ");

  // Evaluate inside a function scope and return only the requested names.
  // This assumes the file consists of plain JS data (objects/arrays/strings/numbers).
  const fn = new Function(
    "'use strict';\n" +
      transformed +
      `\nreturn { ${exportNames.join(", ")} };\n`
  );

  const values = fn();
  return { exportNames, values };
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(
      [
        "Converts `export const` values in data.js into JSON files.",
        "",
        "Usage:",
        "  node scripts/export-data-to-json.js [inputFile] [outputDir]",
        "",
        "Defaults:",
        "  inputFile: data.js",
        "  outputDir:  data-json",
      ].join("\n")
    );
    process.exit(0);
  }

  const { exportNames, values } = loadExportedValuesFromFile(args.inputFile);
  const outDirAbs = path.resolve(process.cwd(), args.outputDir);
  ensureDir(outDirAbs);

  const written = [];
  for (const name of exportNames) {
    const value = values[name];

    let json;
    try {
      json = JSON.stringify(value, null, 2);
    } catch (e) {
      throw new Error(
        `Failed to JSON-serialize export ${name}: ${e && e.message ? e.message : String(e)}`
      );
    }

    if (json === undefined) {
      throw new Error(
        `Export ${name} is not JSON-serializable (JSON.stringify returned undefined).`
      );
    }

    const outFile = path.join(outDirAbs, `${name}.json`);
    fs.writeFileSync(outFile, json + "\n", "utf8");
    written.push(outFile);
  }

  console.log(`Wrote ${written.length} JSON file(s) to ${outDirAbs}`);
  for (const f of written) console.log(`- ${path.relative(process.cwd(), f)}`);
}

main();

// Define a JSON object for Trin car models
export const trinCarModels = [
    {// Trin Heavorum
        name: "Trin Heavorum",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Heavorum_Crew_Cab_Dually.png",
        variant: "Heavorum Crew Cab Dually",
        base_engine: "V8",
        base_wheels: "large",
        base_seats: 1,
        base_price: 40900,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Heavorum_Crew_Cab_Dually.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Heavorum_Crew_Cab_Dually_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ]
    },
    {// Trin Bultizorg
        name: "Trin Bultizorg",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Bultizorg.png",
        variant: "Bultizorg Crew Cab Dually",
        base_engine: "V8",
        base_wheels: "large",
        base_seats: 1,
        base_price: 68200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Bultizorg.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bultizorg_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Trainingor
        name: "Trin Trainingor",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Trainingor_Pickup.png",
        variant: "Trainingor Pickup",
        base_engine: "V6",
        base_wheels: "large",
        base_seats: 1,
        base_price: 43600,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Trainingor_Pickup.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_Pickup_Paint2.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Trainingor
        name: "Trin Trainingor",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Trainingor_SUV.png",
        variant: "Trainingor SUV",
        base_engine: "V6",
        base_wheels: "large",
        base_seats: 1,
        base_price: 38200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Trainingor_SUV.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Trainingor_SUV_Paint2.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Sportail
        name: "Trin Sportail",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Sportail_Large.png",
        variant: "Sportail 4 Door SUV",
        base_engine: "V6",
        base_wheels: "large",
        base_seats: 1,
        base_price: 49100,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Sportail_Large.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Large_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Sportail
        name: "Trin Sportail",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Sportail_Small.png",
        variant: "Sportail 2 Door SUV",
        base_engine: "V6",
        base_wheels: "large",
        base_seats: 1,
        base_price: 40900,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Sportail_Small.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_Small_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Footpather V3
        name: "Trin Footpather",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Footpather_SUV.png",
        variant: "Footpather V3 (deprecated)",
        base_engine: "I4",
        base_wheels: "large",
        base_seats: 1,
        base_price: 21800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Footpather_v3.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_SUV_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Footpather V4 phase 1
        name: "Trin Footpather",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Footpather_p1.png",
        variant: "Footpather Phase 1",
        base_engine: "I4",
        base_wheels: "large",
        base_seats: 1,
        base_price: 18000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Footpather.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p1_Paint3.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Footpather V4 phase 2
        name: "Trin Footpather",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Footpather_p2.png",
        variant: "Footpather Phase 2",
        base_engine: "I4",
        base_wheels: "large",
        base_seats: 1,
        base_price: 26000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Footpather.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p2_Paint3.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Footpather V4 Special Six
        name: "Trin Footpather",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Footpather_p3.png",
        variant: "Footpather Special Six",
        base_engine: "V6",
        base_wheels: "large",
        base_seats: 1,
        base_price: 38000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Footpather.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Footpather_p3_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Springbok
        name: "Trin Springbok",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Springbok.png",
        variant: "Springbok",
        base_engine: "V8",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 54500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Springbok.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Springbok_Paint3.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Devom
        name: "Trin Devom",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Devom_Coupe.png",
        variant: "Devom Coupé",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 32700,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Devom_Coupe.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Coupe_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Devom
        name: "Trin Devom",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Devom_Cabriolet.png",
        variant: "Devom Cabriolet",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 40900,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Devom_Cabriolet.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Devom_Cabriolet_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Flugoral
        name: "Trin Flugoral",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Flugoral.png",
        variant: "Flugoral Cabriolet",
        base_engine: "v8",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 81800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Flugoral.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Paint2.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Flugoral_Paint3.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Ropy
        name: "Trin Ropy",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Ropy_2Door.png",
        variant: "Ropy 2 door",
        base_engine: "I3",
        base_wheels: "compact",
        base_seats: 3,
        base_price: 16300,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Ropy_2Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_2_Door_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Ropy
        name: "Trin Ropy",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Ropy_4Door.png",
        variant: "Ropy 4 door",
        base_engine: "I3",
        base_wheels: "compact",
        base_seats: 3,
        base_price: 21800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Ropy_4Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Ropy_4_Door_Paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Ropy Nova
        name: "Trin Ropy",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/trin_ropy_nova_4door.png",
        variant: "Ropy Nova 4 door",
        base_engine: "I4",
        base_wheels: "compact",
        base_seats: 3,
        base_price: 23500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Ropy_4Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_interior_base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_interior_fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_interior_stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_base.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_paint1.png',
                can_be_wood: false,
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/trin_ropy_nova_4_door_paint2.png',
                can_be_wood: true,
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Keipan
        name: "Trin Keipan",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Keipan.png",
        variant: "Keipan",
        base_engine: "I3",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 13600,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Keipan.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Base.png",
        skin_size_w: 512,
        skin_size_h: 256,
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Keipan
        name: "Trin Keipan",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Keipan_Cross.png",
        variant: "Keipan Cross",
        base_engine: "I3",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 19100,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Keipan_Cross.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Base.png",
        skin_size_w: 512,
        skin_size_h: 256,
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Keipan_Cross_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Rodeo
        name: "Trin Rodeo",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Rodeo_Cabriolet.png",
        variant: "Rodeo Cabriolet",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 30000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Rodeo_Cabriolet.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Cabriolet_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Rodeo
        name: "Trin Rodeo",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Rodeo_Pickup.png",
        variant: "Rodeo Pickup",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 27200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Rodeo_Pickup.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Pickup_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Rodeo
        name: "Trin Rodeo",
        vehicle_category: ["Civil", "Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Rodeo_Panel_Van.png",
        variant: "Rodeo Panel Van",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 21800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Rodeo_Panel_Van.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Panel_Van_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Rodeo
        name: "Trin Rodeo",
        vehicle_category: ["Civil", "Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Rodeo_Window_Van.png",
        variant: "Rodeo Window Van",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 24500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Rodeo_Window_Van.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Rodeo_Window_Van_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Urlon V3
        name: "Trin Urlon (V3)",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Urlon_Sedan.png",
        variant: "Urlon Sedan",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 32700,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Urlon_Sedan.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Urlon V3
        name: "Trin Urlon (V3)",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Urlon_Sedan_Compass.png",
        variant: "Urlon Sedan Compass",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 40900,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Urlon_Sedan_Compass.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_Compass_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Urlon V3
        name: "Trin Urlon (V3)",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Urlon_Wagon.png",
        variant: "Urlon Wagon",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 38200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Urlon_Wagon.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Wagon_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Econobox
        name: "Trin Econobox",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Econobox_Cabriolet.png",
        variant: "Econobox Cabriolet",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 24500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Econobox_Cabriolet.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Cabriolet_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Econobox
        name: "Trin Econobox",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Econobox_Sedan.png",
        variant: "Econobox Sedan",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 21800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Econobox_Sedan.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Sedan_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Econobox
        name: "Trin Econobox",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Econobox_Hatchback.png",
        variant: "Econobox Hatchback",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 19100,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Econobox_Hatchback.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Hatchback_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Econobox
        name: "Trin Econobox",
        vehicle_category: ["Civil", "Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Econobox_Panel_Van.png",
        variant: "Econobox Panel Van",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 21800,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Econobox_Panel_Van.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Panel_Van_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Econobox
        name: "Trin Econobox",
        vehicle_category: ["Civil", "Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Econobox_Window_Van.png",
        variant: "Econobox Window Van",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 3,
        base_price: 24500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Econobox_Window_Van.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Econobox_Window_Van_Paint1.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig
        name: "Trin Gobig",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_Cabriolet_2Door.png",
        variant: "Gobig Cabriolet 2 Door",
        base_engine: "heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 167000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_Cabriolet_2Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Cabriolet_2Door_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig
        name: "Trin Gobig",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_Pickup_2Door.png",
        variant: "Gobig Pickup 2 Door",
        base_engine: "heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 127500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_Pickup_2Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_Pickup_2Door_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig
        name: "Trin Gobig",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_SUV_2Door.png",
        variant: "Gobig SUV 2 Door",
        base_engine: "heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 135000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_SUV_2Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_2Door_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig
        name: "Trin Gobig",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_SUV_4Door.png",
        variant: "Gobig SUV 4 Door",
        base_engine: "heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 149600,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_SUV_4Door.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_SUV_4Door_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig TXS
        name: "Trin Gobig TXS",
        vehicle_category: ["TXS"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_TXS_4x4_SUV.png",
        variant: "Gobig TXS 4x4 SUV",
        base_engine: "V12",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 605000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_TXS_4x4_SUV.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_4x4_SUV_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Gobig TXS
        name: "Trin Gobig TXS",
        vehicle_category: ["TXS"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Gobig_TXS_6x6_Pickup.png",
        variant: "Gobig TXS 6x6 Pickup",
        base_engine: "V12",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 850000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Gobig_TXS_6x6_Pickup.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Interior_Accent.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Gobig_TXS_6x6_Pickup_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Sportail TXS
        name: "Trin Sportail TXS",
        vehicle_category: ["TXS"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Sportail_TXS_Rallye.png",
        variant: "Sportail TXS Rallye",
        base_engine: "V8",
        base_wheels: "huge",
        base_seats: 1,
        base_price: 151200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Sportail_TXS_Rallye.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Sportail_TXS_Rallye_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Formula
        name: "Trin Formula",
        vehicle_category: ["TXS"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Formula.png",
        variant: "Formula F1",
        base_engine: "V12 TXS prepped",
        base_wheels: "standard_TXS",
        base_seats: 3,
        base_price: 1500000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Formula.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Paint2.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Formula_Paint3.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Fabulide
        name: "Trin Fabulide",
        vehicle_category: ["TXS", "Boat"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Fabulide.png",
        variant: "Fabulide Superboat",
        base_engine: "Outboard V8 x 2",
        base_seats: 1,
        base_price: 283500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Fabulide.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Fabulide_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Bolter
        name: "Trin Bolter",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Bolter.png",
        variant: "Bolter B Class Tow Truck",
        base_engine: "Heavy V8",
        base_wheels: "giant",
        base_seats: 1,
        base_price: 151000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Bolter.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Bolter_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Capro
        name: "Trin Capro",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Capro_Triple_Axle.png",
        variant: "Capro Triple Axle Chassis Cab",
        base_engine: "Heavy V8",
        base_wheels: "large",
        base_seats: 1,
        base_price: 84500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Capro_Triple_Axle.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Capro_Triple_Axle_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Foragon
        name: "Trin Foragon",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Foragon_Halfwindow.png",
        variant: "Foragon Half-Window Van",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 27200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Foragon_Halfwindow.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Halfwindow_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Foragon
        name: "Trin Foragon",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Foragon_Minibus.png",
        variant: "Foragon Minibus",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 32700,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Foragon_Minibus.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Minibus_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Foragon
        name: "Trin Foragon",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Foragon_Panel_Van.png",
        variant: "Foragon Panel Van",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 24500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Foragon_Panel_Van.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Panel_Van_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Foragon
        name: "Trin Foragon",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Foragon_Pickup.png",
        variant: "Foragon Pickup",
        base_engine: "i4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 30000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Foragon_Pickup.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Foragon_Pickup_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Juggernaut
        name: "Trin Juggernaut",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Juggernaut_Chassis_Cab.png",
        variant: "Juggernaut Chassis Cab",
        base_engine: "Heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 109700,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Juggernaut_Chassis_Cab.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Chassis_Cab_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Juggernaut
        name: "Trin Juggernaut",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Juggernaut_Semi_Truck.png",
        variant: "Juggernaut Semi Trck",
        base_engine: "Heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 119500,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Juggernaut_Semi_Truck.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Juggernaut_Semi_Truck_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Tormador
        name: "Trin Tormador",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Tormador.png",
        variant: "Tormador C Class Tow Truck",
        base_engine: "Heavy V8",
        base_wheels: "giant",
        base_seats: 2,
        base_price: 327400,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Tormador.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Base.png",
        skin_size_w: 1024,
        skin_size_h: 512,
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Tormador_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Transortus
        name: "Trin Transortus",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Transortus.png",
        variant: "Transortus City Bus",
        base_engine: "Heavy V8",
        base_wheels: "large",
        base_seats: 4,
        base_price: 191000,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Transortus.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Base.png",
        skin_size_w: 1024,
        skin_size_h: 512,
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Transortus
        name: "Trin Transortus",
        vehicle_category: ["Commercial"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Transortus_Crystal.png",
        variant: "Transortus Crystal City Bus",
        base_engine: "Heavy V8",
        base_wheels: "large",
        base_seats: 4,
        base_price: 208200,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Transortus.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Base.png",
        skin_size_w: 1024,
        skin_size_h: 512,
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Transortus_Crystal_Paint2.png',
                shaders_grayscale: '#606060',
            },
        ],
    },
    {// Trin Urlon V4
        name: "Trin Urlon (V4)",
        vehicle_category: ["Civil"],
        pack_name: "Trin Civil Pack",
        image: "https://trin.legends-of-gramdatis.com/model_img/Trin_Urlon_Sedan_V4.png",
        variant: "Urlon Sedan V4",
        base_engine: "I4",
        base_wheels: "standard",
        base_seats: 1,
        base_price: 32700,
        obj: "https://trin.legends-of-gramdatis.com/model_obj/Trin_Urlon_Sedan_V4.obj",
        obj_texture: "https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Base.png",
        interior_layers: [
            {
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Interior_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Fabric",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Interior_Fabric.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Stitching",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Interior_Stitching.png',
                shaders_grayscale: '#606060',
            },
            {
                type: "Accent",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Interior_Accent.png',
                shaders_grayscale: '#606060',
            }
        ],
        paint_layers: [
            {
                id: 0,
                type: "Base",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Base.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 1,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Paint1.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 2,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Paint2.png',
                shaders_grayscale: '#606060',
            },
            {
                id: 3,
                type: "Layer",
                URL: 'https://trin.legends-of-gramdatis.com/model_img/layers/Trin_Urlon_Sedan_V4_Paint3.png',
                shaders_grayscale: '#606060',
            }
        ],
    },
];

// Define a mapping of part IDs to part texts
export const partMapping = {
    base_wheels: {
        gorgantom: "Gorgantom (30*10)",
        giant: "Giant (20*6)",
        huge: "Huge (18*6)",
        large: "Large (16*4)",
        standard: "Standard (14*4)",
        compact: "Compact (11*3)",
        standard_TXS: "Standard TXS (14*7)",
        compact_TXS: "Compact TXS (12*4)",
    },
    base_seats: {
        1: "Model 1 Trin Seat",
        2: "Model 2 Trin Seat",
        3: "Model 3 Trin Seat",
    },
};

/*
############################################################################################
All factory colors, textures and wraps for car paint
############################################################################################
*/

// Define factory colors
export const factoryColors = [
    {
        name: "Glacier White",
        hex: "#F2FAFF",
        price: 0,
    },
    {
        name: "White",
        hex: "#F2EAD7",
        price: 100,
    },
    {
        name: "Ivory",
        hex: "#E2D1AF",
        price: 200,
    },
    {
        name: "Sand",
        hex: "#E1BF92",
        price: 200,
    },
    {
        name: "Sandstone",
        hex: "#CCB576",
        price: 200,
    },
    {
        name: "Sage",
        hex: "#B6B99E",
        price: 200,
    },
    {
        name: "Silver",
        hex: "#757C7F",
        price: 0,
    },
    {
        name: "Iron Gray",
        hex: "#5B595A",
        price: 100,
    },
    {
        name: "Tungsten",
        hex: "#3F3F3F",
        price: 150,
    },
    {
        name: "Jet Black",
        hex: "#2B2C2B",
        price: 100,
    },
    {
        name: "Deep Black",
        hex: "#101111",
        price: 0,
    },
    {
        name: "Sky Blue",
        hex: "#6A9BFC",
        price: 250,
    },
    {
        name: "Patrol Blue",
        hex: "#4079B2",
        price: 100,
    },
    {
        name: "Teal",
        hex: "#258BC8",
        price: 250,
    },
    {
        name: "Ocean Blue",
        hex: "#034DAC",
        price: 250,
    },
    {
        name: "Electric Blue",
        hex: "#012775",
        price: 250,
    },
    {
        name: "Sapphire",
        hex: "#2D3170",
        price: 250,
    },
    {
        name: "Lavender Blue",
        hex: "#3F497F",
        price: 250,
    },
    {
        name: "Seafoam",
        hex: "#9FE2BF",
        price: 200,
    },
    {
        name: "Soft Green",
        hex: "#759856",
        price: 200,
    },
    {
        name: "Emerald",
        hex: "#087847",
        price: 250,
    },
    {
        name: "Oak Green",
        hex: "#2E602F",
        price: 250,
    },
    {
        name: "Spruce",
        hex: "#0C3315",
        price: 250,
    },
    {
        name: "Cold Spruce",
        hex: "#183D36",
        price: 250,
    },
    {
        name: "Military Green",
        hex: "#3A3F2F",
        price: 250,
    },
    {
        name: "Steel Blue",
        hex: "#366473",
        price: 250,
    },
    {
        name: "Lemon Yellow",
        hex: "#EFEA36",
        price: 250,
    },
    {
        name: "Buttercup",
        hex: "#F8CD32",
        price: 250,
    },
    {
        name: "Sunshine Yellow",
        hex: "#FFCD02",
        price: 250,
    },
    {
        name: "Honey",
        hex: "#FD8D03",
        price: 250,
    },
    {
        name: "Gramados Amber",
        hex: "#FF6400",
        price: 250,
    },
    {
        name: "Fire Orange",
        hex: "#FB3700",
        price: 250,
    },
    {
        name: "Orange Red",
        hex: "#EA6136",
        price: 250,
    },
    {
        name: "Tomato",
        hex: "#D62A36",
        price: 250,
    },
    {
        name: "Ruby",
        hex: "#B1272B",
        price: 250,
    },
    {
        name: "Fire Red",
        hex: "#C50000",
        price: 250,
    },
    {
        name: "Blood Red",
        hex: "#650001",
        price: 250,
    },
    {
        name: "Carmin Red",
        hex: "#96001B",
        price: 250,
    },
    {
        name: "Milk Coffee",
        hex: "#996F55",
        price: 250,
    },
    {
        name: "Brown",
        hex: "#4C321F",
        price: 250,
    },
    {
        name: "Chocolate",
        hex: "#2D1A0F",
        price: 250,
    },
    {
        name: "Caramel",
        hex: "#65350F",
        price: 250,
    },
    {
        name: "Amber",
        hex: "#4E0C00",
        price: 250,
    },
    {
        name: "Gunstock",
        hex: "#1A0B01",
        price: 300,
    },
    {
        name: "Midnight Purple",
        hex: "#0D0037",
        price: 250,
    },
    {
        name: "Plum",
        hex: "#3E1744",
        price: 250,
    },
    {
        name: "Grape",
        hex: "#7F3F5B",
        price: 250,
    },
    {
        name: "Pink",
        hex: "#FF7FB6",
        price: 200,
    },
    {
        name: "Fuchsia",
        hex: "#C82260",
        price: 250,
    },
    {
        name: "Vibrant Red",
        hex: "#FF0C0C",
        price: 300,
    },
    {
        name: "Pink Candy",
        hex: "#FF00DC",
        price: 300,
    },
    {
        name: "Dark Pink Candy",
        hex: "#B200FF",
        price: 300,
    },
    {
        name: "Vibrant Purple",
        hex: "#4800FF",
        price: 300,
    },
    {
        name: "Turquoise",
        hex: "#00FF90",
        price: 300,
    },
    {
        name: "Slime Lime",
        hex: "#00FF21",
        price: 300,
    },
    {
        name: "Citrus",
        hex: "#97C004",
        price: 300,
    },
];

// Define factory Wraps
export const factoryWraps = [
    {// Carbon Fiber
        name: "Carbon Fiber",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Carbon_Fiber.png",
        price: 3000,
    },
    {// Chrome
        name: "Chrome",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Chrome.png",
        price: 2000,
    },
    {// Coal Edition
        name: "Coal Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Coal_Edition.png",
        price: 1250,
    },
    {// Tungsten Edition
        name: "Tungsten Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Tungsten_Edition.png",
        price: 1450,
    },
    {// Redstone Edition
        name: "Redstone Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Redstone_Edition.png",
        price: 1300,
    },
    {// Iron Edition
        name: "Iron Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Iron_Edition.png",
        price: 1300,
    },
    {// Quartz Edition
        name: "Quartz Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Quartz_Edition.png",
        price: 1300,
    },
    {// Lapis Lazuli Edition
        name: "Lapis Lazuli Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Lapis_Lazuli_Edition.png",
        price: 1400,
    },
    {// Silver Edition
        name: "Silver Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Silver_Edition.png",
        price: 1750,
    },
    {// Gold Edition
        name: "Gold Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Gold_Edition.png",
        price: 2000,
    },
    {// Diamond Edition
        name: "Diamond Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Diamond_Edition.png",
        price: 2500,
    },
    {// Emerald Edition
        name: "Emerald Edition",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Emerald_Edition.png",
        price: 2500,
    },
    {// Rugged Blue
        name: "Rugged Blue",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Rugged_Blue.png",
        price: 2100,
    },
    {// Rugged Orange
        name: "Rugged Orange",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Rugged_Orange.png",
        price: 2100,
    },
    {// Rugged Yellow
        name: "Rugged Yellow",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Rugged_Yellow.png",
        price: 2100,
    },
    {// Old Metal
        name: "Old Metal",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Old_Metal.jpg",
        price: 1500,
    },
    {// Wicker_Braid
        name: "Wicker_Braid",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Wicker_Braid.png",
        price: 1750,
    },
    {// Camo Yellow Desert
        name: "Camo Yellow Desert",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Camo_Yellow_Desert.png",
        price: 2500,
    },
    {// Camo Red Desert
        name: "Camo Red Desert",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Camo_Red_Desert.png",
        price: 2500,
    },
    {// Camo Forest
        name: "Camo Forest",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Camo_Forest.png",
        price: 2500,
    },
    {// Camo Plain
        name: "Camo Plain",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Camo_Plain.png",
        price: 2500,
    },
    {// Camo Snow
        name: "Camo Snow",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Camo_Snow.png",
        price: 2500,
    },
    {// Drive School
        name: "Drive School",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Drive_School.png",
        price: 1200,
    },
    {// Leopard
        name: "Leopard",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Leopard.png",
        price: 1750,
    },
    {// Zebra
        name: "Zebra",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Zebra.png",
        price: 1750,
    },
    {// Tiger
        name: "Tiger",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Tiger.png",
        price: 1750,
    },
    {// Panther
        name: "Panther",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Panther.png",
        price: 1750,
    },
    {// Cow
        name: "Cow",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Cow.png",
        price: 1750,
    },
    {// Girafe
        name: "Girafe",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Girafe.png",
        price: 1750,
    },
    {// Snow Panther
        name: "Snow_Panther",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Snow_Panther.png",
        price: 1750,
    },
    {// Spongebob
        name: "Spongebob",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Sponge_Bob.png",
        price: 1150,
    },
    {// Plentiful Cave
        name: "Plentiful Cave",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Plentiful_Cave.png",
        price: 1150,
    },
    {// Pumpkin
        name: "Halloween Pumpkin",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/pumpkins.png",
        price: 1750,
    },
    {// Pumpkin
        name: "Halloween Bloody Scales",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/spooky_scales.png",
        price: 2000,
    },
    {//iridescence 
        name: "Iridescent",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/iridescence.png",
        price: 2000,
    },
    {// Black Marble
        name: "Black Marble",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/black_marble.png",
        price: 2000,
    },
    {// Black Granite
        name: "Black Granite",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/black_granite.png",
        price: 2000,
    },
    {// Blue Sodalite
        name: "Blue Sodalite",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/blue_sodalite.png",
        price: 2000,
    },
    {// Golden marble
        name: "Golden Marble",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/golden_marble.png",
        price: 2000,
    },
    {// Rosso Asiago
        name: "Rosso Asiago",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/rosso_asiago.png",
        price: 2000,
    },
    {// Verde Indio
        name: "Verde Indio",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/verde_indio.png",
        price: 2000,
    },
    {// wWhite Marble
        name: "White Marble",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/white_marble.png",
        price: 2000,
    },
    {// Yellow Onyx
        name: "Yellow Onyx",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/yellow_onyx.png",
        price: 2000,
    }

];

// Define factory woods
export const factoryWoods = [
    {// Dark Walnut
        name: "Dark Walnut",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Dark_Walnut.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Early American
        name: "Early American",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Early_American.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Ebony
        name: "Ebony",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Ebony.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Golden Pecan
        name: "Golden Pecan",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Golden_Pecan.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Provincial
        name: "Provincial",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Provincial.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Sedona Red
        name: "Sedona Red",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Sedona_Red.png",
        exterior_price: 1000,
        interior_price: 400,
    },
    {// Cherry
        name: "Cherry",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/woods/Cherry.png",
        exterior_price: 1000,
        interior_price: 400,
    }
];

// Define interior colors
export const interiorColors = [
    {
        name: "Gray",
        base_color: "#424242",
        panel_color: "#828282",
        stitching_color: "#515151",
        price: 0,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_Gray.png",
    },
    {
        name: "White",
        base_color: "#666666",
        panel_color: "#E5E5E5",
        stitching_color: "#CCCCCC",
        price: 200,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_White.png",
    },
    {
        name: "Brown",
        base_color: "#271101",
        panel_color: "#361701",
        stitching_color: "#472916",
        price: 250,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_Brown.png",
    },
    {
        name: "Red",
        base_color: "#191819",
        panel_color: "#802625",
        stitching_color: "#521A1C",
        price: 300,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_Red.png",
    },
    {
        name: "Tan",
        base_color: "#CEBC68",
        panel_color: "#FEF6D6",
        stitching_color: "#EEE8C9",
        price: 300,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_Tan.png",
    },
    {
        name: "Black",
        base_color: "#050505",
        panel_color: "#0F0F0F",
        stitching_color: "#191919",
        price: 300,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_Black.png",
    },
    {
        name: "Gray & Blue",
        base_color: "#3A3A3A",
        panel_color: "#142168",
        stitching_color: "#BFBFBF",
        secondary_base_color: "#1A1A1A",
        price: 500,
        background_url: "https://trin.legends-of-gramdatis.com/car_texture_layers/interior/Interior_Showcase_GrayBlue.png",
    },
];

// Define interior accents
export const interiorAccents = [
    {
        name: "Carbon Fiber",
        texture: "https://trin.legends-of-gramdatis.com/car_texture_layers/wraps/Carbon_Fiber.png",
        interior_price: 1000,
    },
];





export function get_body_texture_type(texture_name) {
    // get the texture type of texture_name
    if (factoryColors.find(color => color.name === texture_name) != undefined) {
        var texture_type = "Paint";
    } else if (factoryWraps.find(interior_accent => interior_accent.name === texture_name) != undefined) {
        var texture_type = "Wrap";
    } else if (factoryWoods.find(interior_accent => interior_accent.name === texture_name) != undefined) {
        var texture_type = "Wood";
    } else if (texture_name.startsWith("#")) {
        var texture_type = "Custom";
    } else if (texture_name.startsWith("data:image/")) {
        var texture_type = "CustomTiled";
    } else {
        console.log("Body texture type not found");
    }

    console.log("Texture type of ", texture_name, " is ", texture_type);
    return texture_type;
}

export function get_interior_texture_type(texture_name) {
    // get the texture type of texture_name
    if (factoryWoods.find(interior_accent => interior_accent.name === texture_name) != undefined) {
        var texture_type = "Wood";
    } else if (interiorColors.find(color => color.name === texture_name) != undefined) {
        var texture_type = "Color";
    } else if (interiorAccents.find(interior_accent => interior_accent.name === texture_name) != undefined) {
        var texture_type = "Accent";
    } else if (texture_name.startsWith("#")) {
        var texture_type = "Custom";
    } else {
        console.log("Interior texture type not found");
    }

    return texture_type;
}

export function get_texture(texture_name, texture_type) {
    console.log("Getting texture of ", texture_name, " of type ", texture_type);
    if (texture_type == "Paint") {
        return factoryColors.find(color => color.name === texture_name);
    } else if (texture_type == "Wrap") {
        return factoryWraps.find(interior_accent => interior_accent.name === texture_name);
    } else if (texture_type == "Wood") {
        return factoryWoods.find(interior_accent => interior_accent.name === texture_name);
    } else if (texture_type == "Color") {
        return interiorColors.find(color => color.name === texture_name);
    } else if (texture_type == "Accent") {
        return interiorAccents.find(interior_accent => interior_accent.name === texture_name);
    } else if (texture_type == "Custom") {
        return { name: texture_name, hex: texture_name, price: 5000 };
    } else {
        console.log("Layer type not found");
    }
}

export function get_full_interior_textile(textile_name) {
    console.log("Getting textile colors of ", textile_name);
    // get the textile colors of textile_name
    var textile = interiorColors.find(textile => textile.name === textile_name);
    console.log("Textile ", textile_name, " is ", textile);
    return textile;
}
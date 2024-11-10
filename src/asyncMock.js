const products = [
    {
        "id": 1,
        "title": "Apple iPhone 16",
        "description": "El iPhone 16 Plus está diseñado para disfrutar Apple Intelligence, el sistema de inteligencia personal que te ayuda a escribir, expresarte y hacer de todo con mucha facilidad. ",
        "images":[
            "/iphone16-1.webp",
            "/iphone16-2.webp",
            "/iphone16-3.webp",
            "/iphone16-4.webp"
        ],
        "price": [19.999,22.499,27.499],
        "storage":["128 GB", "256 GB","512 GB"],
        "colors":["green","black","blue","white"],
        "marca":"Apple",
        "code": 1160508702,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 2,
        "title": "Apple iPhone 15 Pro Max",
        "description": "Resolución cámara web superalta de 24 MP y 48 MP. Megapíxeles cámara web: Gran angular de 48 MP. Bocina estéreo integrada. El iPhone es resistente a las salpicaduras, al agua y al polvo ",
        "images":[
            "/iphone15-1.webp",
            "/iphone15-2.webp",
            "/iphone15-3.webp",
            "/iphone15-4.webp"
        ],
        "price": [28.999,33.499,37.999],
        "storage":["256 GB", "512 GB","1 TB"],
        "colors":["black","blue","gray","white"],
        "marca":"Apple",
        "code": 1142672190,
        "rating": 5,
        "category": "Celulares"
    }
    ,
    {
        "id": 3,
        "title": "Apple iPhone 14",
        "description": "Resistencia a las salpicaduras, al agua y al polvo: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529",
        "images":[
            "/iphone14-1.webp",
            "/iphone14-2.webp",
            "/iphone14-3.webp",
            "/iphone14-4.webp"
        ],
        "price": [16.999,18.499,23.499],
        "storage":["128 GB", "256 GB","512 GB"],
        "colors":["blue","black","purple","red","yellow"],
        "marca":"Apple",
        "code": 1126767409,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 4,
        "title": "Apple iPhone 13",
        "description": " El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante",
        "images":[
            "/iphone13-1.webp",
            "/iphone13-2.webp",
            "/iphone13-3.webp",
            "/iphone13-4.webp"
        ],
        "price": [22.499,24.499,29.499],
        "storage":["128 GB", "256 GB","512 GB"],
        "colors":["black","blue","red","pink"],
        "marca":"Apple",
        "code": 1111323971,
        "rating": 5,
        "category": "Celulares"
    },
    {
        "id": 5,
        "title": "Apple iPhone 12",
        "description": "Dentro de la caja encuentra: iPhone 12 de 64 GB, cable de datos USB Lightning de un metro con su adaptador de corriente",
        "images":[
            "/iphone12-1.webp",
            "/iphone12-2.webp",
            "/iphone12-3.webp"
        ],
        "price": [5.999,7.499,12.499],
        "storage":["64 GB", "128 GB","256 GB"],
        "colors":["blue","black","white","red"],
        "marca":"Apple",
        "code": 9950692172,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 6,
        "title": "Samsung Galaxy S22",
        "description": "El Samsung S22 es el Smartphone que e da nombre a la serie. El Galaxy S22 llega con una pantalla Dynamic AMOLED 2X de 6.1 y tasa de refresco variable de 120Hz.",
        "images":[
            "/samsungs22-1.webp",
            "/samsungs22-2.webp",
            "/samsungs22-3.webp"
        ],
        "price": [7.499,9.499],
        "storage":[ "128 GB","256 GB"],
        "colors":["purple","black"],
        "marca":"Samsung",
        "code": 99970162129,
        "rating": 3,
        "category": "Celulares"
    },
    {
        "id": 7,
        "title": "Samsung Galaxy S21+",
        "description": "Exprésate libremente. Con la nueva familia de smartphones Galaxy S21 desata tu creatividad y productividad con sus funciones avanzadas: cámara principal de 64MP",
        "images":[
            "/samsungs21-1.webp",
            "/samsungs21-2.webp",
            "/samsungs21-3.webp",
            "/samsungs21-4.webp"
        ],
        "price": [7.499,9.499],
        "storage":["128 GB","256 GB"],
        "colors":["purple","black","blue"],
        "marca":"Samsung",
        "code": 1103181514,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 8,
        "title": "Samsung Galaxy S24+",
        "description": "Samsung Galaxy S24 Plus + Watch de regalo",
        "images":[
            "/samsungs24-1.webp",
            "/samsungs24-2.webp",
            "/samsungs24-3.webp"
        ],
        "price": [17.499,19.499],
        "storage":["256 GB","512 GB"],
        "colors":["gray","black","purple"],
        "marca":"Samsung",
        "code": 99975499373,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 9,
        "title": "Samsung Galaxy A52",
        "description": "Galaxy A52 es un equipo más que asombroso, cuenta con una cámara trasera cuádruple de 64MP + 12MP + 5MP + 5MP y una cámara frontal de 32 MP",
        "images":[
            "/samsunga52-1.webp",
            "/samsunga52-2.webp",
            "/samsunga52-3.webp",
            "/samsunga52-4.webp"
        ],
        "price": [6.499,8.499],
        "storage":["128 GB","256 GB"],
        "colors":["black","blue"],
        "marca":"Samsung",
        "code": 1104599466,
        "rating": 3,
        "category": "Celulares"
    },
    {
        "id": 10,
        "title": "Samsung Galaxy S22+",
        "description": "El Samsung Galaxy S22+ es la variante más grande del S22. Con una pantalla AMOLED de 6.6 pulgadas a resolución FHD+ y tasa de refresco de 120H",
        "images":[
            "/samsungs22plus-1.webp",
            "/samsungs22plus-2.webp",
            "/samsungs22plus-3.webp"
        ],
        "price": [10.499,13.499],
        "storage":["128 GB","256 GB"],
        "colors":["black","white","red"],
        "marca":"Samsung",
        "code": 99968225616,
        "rating": 5,
        "category": "Celulares"
    },
    {
        "id": 11,
        "title": "Samsung Galaxy Z Fold4",
        "description": "Todo lo que deseas en un smartphone 5G, materiales de alta calidad y mayor durabilidad. Hemos logrado que se pliegue y se despliegue, revelando una pantalla realmente inmersiva para que puedas trabajar.",
        "images":[
            "/samsungz-1.webp",
            "/samsungz-2.webp",
            "/samsungz-3.webp",
            "/samsungz-4.webp"
        ],
        "price": [22.999,24.499],
        "storage":["256 GB","512 GB"],
        "colors":["black","white","red"],
        "marca":"Samsung",
        "code": 1125088389,
        "rating": 5,
        "category": "Celulares"
    },
    {
        "id": 12,
        "title": "Huawei Pura 70",
        "description": "HUAWEI Pura 70, desde sus características más prácticas, como su tecnología de cámara, hasta su exquisita apariencia, larga duración de la batería",
        "images":[
            "/huaweipura-1.webp",
            "/huaweipura-2.webp",
            "/huaweipura-3.webp"
        ],
        "price": [10.499,13.999],
        "storage":["128 GB","256 GB"],
        "colors":["black","white","pink"],
        "marca":"Huawei",
        "code": 1155503663,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 13,
        "title": "Huawei Nova 10",
        "description": "El Huawei Nova 10 cuenta con una cámara frontal gran angular de 60MP, además de su diseño ultradelgado de 6.88 mm y Huawei SuperCharge de 66W",
        "images":[
            "/huaweinova-1.webp",
            "/huaweinova-2.webp",
            "/huaweinova-3.webp",
            "/huaweinova-4.webp"
        ],
        "price": [10.499,12.999],
        "storage":["128 GB","256 GB"],
        "colors":["gray","purple","black"],
        "marca":"Huawei",
        "code": 1132263918,
        "rating": 3,
        "category": "Celulares"
    },
    {
        "id": 14,
        "title": "Huawei Y9A",
        "description": "El Huawei Y9a es un nuevo miembro de la serie Y de Huawei. Con una pantalla Full HD+ de 6.63 pulgadas, el Huawei Y9a utiliza un procesador Mediatek Helio G80",
        "images":[
            "/huaweiy-1.webp",
            "/huaweiy-2.webp",
            "/huaweiy-3.webp"
        ],
        "price": [6.999,9.499],
        "storage":["64 GB", "128 GB"],
        "colors":["silver","pink"],
        "marca":"Huawei",
        "code": 23733704,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 15,
        "title": "Huawei P60 Pro",
        "description": "El nuevo Huawei P60 Pro es un smartphone de última generación que viene integrado con 3 cámaras principales de 48 + 48 + 13 Megapíxeles.",
        "images":[
            "/huaweip60-1.webp",
            "/huaweip60-2.webp",
            "/huaweip60-3.webp"
        ],
        "price": [10.499,14.499],
        "storage":["256 GB","512 GB"],
        "colors":["black","white"],
        "marca":"Huawei",
        "code": 1137727645,
        "rating": 4,
        "category": "Celulares"
    },
    {
        "id": 16,
        "title": "Huawei P30 Lite",
        "description": "Con estilo y diseño; El HUAWEI P30 lite cabe cómodamente en la palma de su mano. El diseño delgado de vidrio curvo 3D está pensado para un fácil agarre y uso con una sola mano.",
        "images":[
            "/huaweip30-1.webp",
            "/huaweip30-2.webp",
            "/huaweip30-3.webp"
        ],
        "price": [8.499,11.499],
        "storage":["64 GB", "128 GB"],
        "colors":["blue","black","red"],
        "marca":"Huawei",
        "code": 1096079776,
        "rating": 5,
        "category": "Celulares"
    }
    ,{
        "id": 17,
        "title": "Realme 12 Plus",
        "description": "Su diseño premium está inspirado en los relojes de lujo y piel vegana. Su pantalla de 120 Hz te brinda una experiencia visual fluida",
        "images":[
            "/realme12-1.webp",
            "/realme12-2.webp",
            "/realme12-3.webp"
        ],
        "price": [6.499,9.999],
        "storage":["256 GB", "512 GB"],
        "colors":["yellow","green"],
        "marca":"Realme",
        "code": 99976752366,
        "rating": 3,
        "category": "Celulares"
    }
    ,{
        "id": 18,
        "title": "Realme 12 Pro+",
        "description": "El Realme 12 Pro+ 5G redefine la fotografía móvil al fusionar potencia tecnológica con una estética exquisita.",
        "images":[
            "/realme12pro-1.webp",
            "/realme12pro-2.webp",
            "/realme12pro-3.webp"
        ],
        "price": [7.499,10.499],
        "storage":["256 GB", "512 GB"],
        "colors":["yellow","blue"],
        "marca":"Realme",
        "code": 9870480966,
        "rating": 4,
        "category": "Celulares"
    }
    ,{
        "id": 19,
        "title": "Oppo Reno 12F",
        "description": "¡Descubre el nuevo OPPPO RENO 12F 5G tiene una pantalla de 6.67 pulgadas que te encantará mirar! Su diseño delgado de solo 75.7 mm se adapta facil a tu mano",
        "images":[
            "/oppo12f-1.webp",
            "/oppo12f-2.webp",
            "/oppo12f-3.webp"
        ],
        "price": [7.499,10.499],
        "storage":["256 GB","512 GB"],
        "colors":["orange","green"],
        "marca":"Oppo",
        "code": 1161208346,
        "rating": 5,
        "category": "Celulares"
    }
    ,{
        "id": 20,
        "title": "Oppo Reno 12",
        "description": "OPPO Reno12 5G es la combinación perfecta entre estilo y una experiencia smart AI. Su diseño de anillo cósmico con aro de luz comprueba que es un dispositivo muy a la moda.",
        "images":[
            "/oppo12-1.webp",
            "/oppo12-2.webp",
            "/oppo12-3.webp"
        ],
        "price": [7.499,9.499],
        "storage":["256 GB","512 GB"],
        "colors":["purple","gray"],
        "marca":"Oppo",
        "code": 1161650065,
        "rating": 4,
        "category": "Celulares"
    }
    ,{
        "id": 21,
        "title": "Oppo Reno 11",
        "description": "¡Descubre la revolución en telefonía con el nuevo OPPO Reno11 5G! Sumérgete en una experiencia visual envolvente sin bordes gracias a su pantalla 3D curva.",
        "images":[
            "/oppo11-1.webp",
            "/oppo11-2.webp",
            "/oppo11-3.webp"
        ],
        "price": [7.999,10.499],
        "storage":["256 GB", "512 GB"],
        "colors":["gray","green"],
        "marca":"Oppo",
        "code": 1150264164,
        "rating": 4,
        "category": "Celulares"
    }
];

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 0);
    })
}

export const getProductsBrand = (brandId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.marca === brandId))
        }, 0);
    })
}

export const getProductsId = (productId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.code == productId))
        }, 0);
    })
}


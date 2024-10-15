import CustomResponse from "./classes/CustomResponse";

function get(): CustomResponse {
    const data = {
        details: {
            starter: [
                { "id": 1, "title": "tincidunt lacus at velit", "description": "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed", "price": 15 },
                { "id": 2, "title": "tortor id nulla ultrices", "description": "urna ut tellus nulla", "price": 13 },
                { "id": 3, "title": "non interdum in", "description": "accumsan tellus nisi eu orci mauris lacinia sapien quis libero", "price": 8 },
                { "id": 4, "title": "nunc commodo", "description": "suspendisse potenti in eleifend quam a", "price": 12 },
                { "id": 5, "title": "sapien cum sociis natoque", "description": "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit", "price": 5 },
                { "id": 6, "title": "cras pellentesque volutpat dui", "description": "est quam pharetra", "price": 9 },
                { "id": 7, "title": "aenean sit", "description": "a libero nam dui proin leo", "price": 14 },
                { "id": 8, "title": "aliquet massa id lobortis", "description": "libero rutrum ac lobortis vel", "price": 12 },
                { "id": 9, "title": "nec dui luctus rutrum", "description": "vivamus in felis eu sapien cursus vestibulum proin eu mi nulla", "price": 8 },
                { "id": 10, "title": "at velit", "description": "nisi at nibh in hac habitasse platea dictumst aliquam", "price": 7 }
            ],
            main: [
                { "id": 1, "title": "rhoncus aliquam lacus", "description": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus", "price": 26, "category": "vege" },
                { "id": 2, "title": "luctus et ultrices posuere", "description": "primis in faucibus orci luctus et ultrices posuere", "price": 28, "category": "fish" },
                { "id": 3, "title": "vitae ipsum aliquam non", "description": "nulla dapibus dolor vel est", "price": 29, "category": "share" },
                { "id": 4, "title": "morbi ut odio", "description": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum", "price": 17, "category": "vege" },
                { "id": 5, "title": "id justo", "description": "rutrum nulla nunc purus phasellus in", "price": 29, "category": "share" },
                { "id": 6, "title": "varius ut blandit non", "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur", "price": 23, "category": "vege" },
                { "id": 7, "title": "penatibus et magnis", "description": "magna at nunc commodo placerat praesent blandit", "price": 20, "category": "fish" },
                { "id": 8, "title": "suscipit nulla elit ac", "description": "elit ac nulla sed vel enim sit", "price": 26, "category": "meat" },
                { "id": 9, "title": "nec condimentum neque sapien", "description": "varius integer ac leo pellentesque ultrices mattis odio", "price": 17, "category": "meat" },
                { "id": 10, "title": "morbi porttitor lorem id", "description": "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin", "price": 22, "category": "meat" }
            ],
            dessert: [
                { "id": 1, "title": "libero convallis", "description": "aenean fermentum donec ut mauris eget massa tempor", "price": 8 },
                { "id": 2, "title": "sem praesent id", "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis", "price": 7 },
                { "id": 3, "title": "vulputate justo in", "description": "dolor vel est donec odio justo sollicitudin ut suscipit a", "price": 4 },
                { "id": 4, "title": "consequat metus sapien", "description": "amet nunc viverra dapibus nulla suscipit ligula in lacus", "price": 4 },
                { "id": 5, "title": "justo maecenas rhoncus aliquam", "description": "ut rhoncus aliquet pulvinar sed", "price": 7 }
            ],
            drink: [
                { "id": 1, "title": "nulla", "price": 6, "category": "disgestive" },
                { "id": 2, "title": "erat", "price": 6, "category": "soft" },
                { "id": 3, "title": "convallis eget eleifend", "price": 7, "category": "soft" },
                { "id": 4, "title": "vestibulum sed", "price": 5, "category": "disgestive" },
                { "id": 5, "title": "nunc", "price": 7, "category": "hard_cocktail" },
                { "id": 6, "title": "nunc", "price": 5, "category": "wine" },
                { "id": 7, "title": "integer", "price": 6, "category": "hard_cocktail" },
                { "id": 8, "title": "dictumst maecenas", "price": 7, "category": "soft" },
                { "id": 9, "title": "convallis", "price": 7, "category": "disgestive" },
                { "id": 10, "title": "faucibus cursus urna", "price": 7, "category": "beer" },
                { "id": 11, "title": "erat", "price": 7, "category": "disgestive" },
                { "id": 12, "title": "sed justo", "price": 5, "category": "beer" },
                { "id": 13, "title": "pellentesque at", "price": 4, "category": "beer" },
                { "id": 14, "title": "justo", "price": 6, "category": "soft" },
                { "id": 15, "title": "magna vestibulum", "price": 6, "category": "wine" },
                { "id": 16, "title": "molestie nibh", "price": 3, "category": "hard_cocktail" },
                { "id": 17, "title": "sit amet", "price": 8, "category": "coffee" },
                { "id": 18, "title": "ut dolor", "price": 4, "category": "soft_cocktail" },
                { "id": 19, "title": "lectus vestibulum", "price": 4, "category": "hard_cocktail" },
                { "id": 20, "title": "etiam", "price": 7, "category": "wine" },
                { "id": 21, "title": "pulvinar sed nisl", "price": 8, "category": "soft_cocktail" },
                { "id": 22, "title": "nulla elit", "price": 7, "category": "wine" },
                { "id": 23, "title": "parturient montes", "price": 8, "category": "soft_cocktail" },
                { "id": 24, "title": "congue vivamus metus", "price": 7, "category": "soft_cocktail" },
                { "id": 25, "title": "pellentesque viverra pede", "price": 3, "category": "wine" },
                { "id": 26, "title": "arcu adipiscing molestie", "price": 7, "category": "coffee" },
                { "id": 27, "title": "in lacus curabitur", "price": 3, "category": "wine" },
                { "id": 28, "title": "ante ipsum", "price": 7, "category": "beer" },
                { "id": 29, "title": "pulvinar lobortis", "price": 7, "category": "disgestive" },
                { "id": 30, "title": "sit amet", "price": 6, "category": "disgestive" }
            ]
        },
        formulas: [
            {
                id: 1,
                category: "lunch",
                title: "le rapide",
                details: {
                    starter: [
                        "Donec vel pellentesque sapien",
                        "Vestibulum ante ipsum primis"
                    ],
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ]
                },
                price: 30
            },
            {
                id: 2,
                category: "lunch",
                title: "le gourmand",
                details: {
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ],
                    dessert: [
                        "Aliquam molestie",
                        "Maecenas ut magna lorem"
                    ],
                },
                price: 24
            },
            {
                id: 3,
                category: "lunch",
                title: "le parfait",
                details: {
                    starter: [
                        "Donec vel pellentesque sapien",
                        "Vestibulum ante ipsum primis"
                    ],
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ],
                    dessert: [
                        "Aliquam molestie",
                        "Maecenas ut magna lorem"
                    ],
                },
                price: 35
            }, {
                id: 4,
                category: "diner",
                title: "la fringale",
                details: {
                    starter: [
                        "Donec vel pellentesque sapien",
                        "Vestibulum ante ipsum primis"
                    ],
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ]
                },
                price: 30
            },
            {
                id: 5,
                category: "diner",
                title: "le p'tit creux",
                details: {
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ],
                    dessert: [
                        "Aliquam molestie",
                        "Maecenas ut magna lorem"
                    ],
                },
                price: 24
            },
            {
                id: 6,
                category: "diner",
                title: "le glouton",
                details: {
                    starter: [
                        "Donec vel pellentesque sapien",
                        "Vestibulum ante ipsum primis"
                    ],
                    main: [
                        "In vel nulla sollicitudin",
                        "Maecenas sed mauris feugiat"
                    ],
                    dessert: [
                        "Aliquam molestie",
                        "Maecenas ut magna lorem"
                    ],
                },
                price: 35
            }
        ],
        kidMenu: {
            title: "et pour les petits ...",
            details: [
                "Aliquam molestie",
                "Maecenas ut magna lorem"
            ],
            price: 15
        }
    }

    return new CustomResponse(true, data);
}

export default {
    get,
}
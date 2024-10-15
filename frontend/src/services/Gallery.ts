import CustomResponse from "./classes/CustomResponse";

function get(): CustomResponse {
    const data = [
        {
            path: "img-meal-diner.png",
            title: "lorem ipsum dolor"
        },
        {
            path: "img-meal-lunch.png",
            title: "consectetur adipisicing elit"
        },
        {
            path: "img-savoie-first.png",
            title: "praesentium quisquam aliquam magnam"
        },
        {
            path: "img-savoie-second.png",
            title: "veniam consectetur sed facilis"
        },
        {
            path: "img-savoie-third.png",
            title: "mollitia odio quis"
        },
        {
            path: "img-food-1.png",
            title: "incidunt asperiores"
        },
        {
            path: "img-food-2.png",
            title: "vero modi impedit"
        },
        {
            path: "img-landscape-1.png",
            title: "porro voluptas"
        }
    ];

    return new CustomResponse(true, data);
}

export default {
    get,
}
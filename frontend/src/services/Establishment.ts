import CustomResponse from "./classes/CustomResponse";

function get(): CustomResponse {
    return new CustomResponse(true, {
        servicesTime: {
            'lunch': '12:00',
            'diner': '19:00'
        },
        serviceDuration: 2,
        capacity: 40,
        schedules: [
            null,
            [12, 19],
            [12, 19],
            [12, 19],
            [12, 19],
            [12, 19],
            [12, 19]
        ],
        location: {
            address: '123 Avenue du Grand Port',
            zipCode: '73100',
            city: 'Aix-les-Bains'
        },
        contact: {
            phone: '+33612345678',
            email: 'contact@quai-antique.fr'
        }
    });
}

export default {
    get,
}
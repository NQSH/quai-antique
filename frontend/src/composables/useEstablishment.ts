const establishmentInfo = {
    servicesTime: {
        'lunch': '12:00',
        'diner': '19:00'
    },
    serviceDuration: 2,
    capacity: 40,
}

export function useEstablishment() {
    return {
        establishmentInfo,
    }
}
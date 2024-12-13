import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";

const establishmentInfo = ref<EstablishmentInfo>({
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

export function useEstablishment() {

    function get(): void {
        const response = Services.Establishment.get();
        establishmentInfo.value = response.data as EstablishmentInfo;
    }

    function post(infos: object): void {
        establishmentInfo.value = { ...establishmentInfo.value, ...infos } as EstablishmentInfo;
    }

    onMounted(() => {
        if (!establishmentInfo.value) get();
    })

    return {
        post,
        establishmentInfo,
    }
}

export type EstablishmentInfo = {
    servicesTime: {
        'lunch': string
        'diner': string
    },
    serviceDuration: number,
    capacity: number,
    schedules: [
        null,
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number]
    ],
    location: {
        address: string
        zipCode: string
        city: string
    },
    contact: {
        phone: string
        email: string
    }
}
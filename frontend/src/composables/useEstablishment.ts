import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";

const establishmentInfo = ref<EstablishmentInfo>();

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
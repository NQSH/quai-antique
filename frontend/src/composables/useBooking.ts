import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";
import { useAuthentication } from "./useAuthentication";
import type CustomResponse from "@/services/classes/CustomResponse";
import { useToast } from "./useToast";
import { useRouter } from "./useRouter";

const bookings = ref<Data>([]);
const isLoading = ref(false);
const error = ref();

export function usebooking() {
    const { authentication } = useAuthentication();
    const { popMessage } = useToast();
    const { navigateTo } = useRouter();

    function handlePost(response: CustomResponse): void {
        if (response.statusOK) {
            popMessage('Votre demande de réservation a bien été effectuée');
            navigateTo('bookings');
        } else error.value = response.message;
        isLoading.value = false;
    }
    function post(booking: Booking): void {
        isLoading.value = true;
        error.value = undefined;
        Services.Booking.post(handlePost, booking);
    }

    onMounted(() => {
        if (authentication.value) {
            const response = Services.Booking.get(authentication.value?.accessToken);
            if (response.statusOK) {
                bookings.value = response.data as Data;
            }
        }
    })

    return {
        bookings,
        isLoading,
        error,
        post
    }
}

export type Booking = {
    name?: string
    surname?: string
    date: string
    time: string
    numberOfPerson: number
    allergy: boolean
    allergies: string
}

type Data = Booking[]

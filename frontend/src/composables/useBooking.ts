import { Services } from "@/services/_services";
import { ref, watch } from "vue";
import { useAuthentication } from "./useAuthentication";
import type CustomResponse from "@/services/classes/CustomResponse";
import { useToast } from "./useToast";
import { useRouter } from "./useRouter";
import { useModal } from "./useModal";

const bookings = ref<Data>();
const isLoading = ref<boolean>(false);
const error = ref<string | undefined>();

export function useBooking() {
    const { authentication } = useAuthentication();
    const { popMessage } = useToast();
    const { navigateTo } = useRouter();
    const { closeModal } = useModal();

    function get(): void {

    }

    function handlePost(response: CustomResponse): void {
        if (response.statusOK) {
            popMessage('Votre demande de réservation a bien été effectuée');
            bookings.value?.push(response.data as Booking);
            navigateTo('bookings');
        } else error.value = response.message;
        isLoading.value = false;
    }

    function post(booking: Booking): void {
        isLoading.value = true;
        error.value = undefined;
        Services.Booking.post(handlePost, booking);
    }

    function handlePut(response: CustomResponse): void {
        if (response.statusOK) {
            popMessage('La modification de réservation a bien été effectuée');
            const newBooking = response.data as Booking;
            bookings.value = bookings.value?.filter(booking => booking.id !== newBooking.id);
            bookings.value?.push(newBooking);
            navigateTo('bookings');
            closeModal();
        } else error.value = response.message;
        isLoading.value = false;
    }

    function put(booking: Booking): void {
        isLoading.value = true;
        error.value = undefined;
        Services.Booking.put(handlePut, booking);
    }

    function remove(booking: Booking): void {
        bookings.value = bookings.value?.filter(currentBooking => currentBooking.id !== booking.id);
        popMessage('Votre réservation a bien été supprimée.')
    }

    watch(authentication, () => {
        if (!bookings.value && authentication.value) {

            const response = Services.Booking.get(authentication.value?.accessToken);
            if (response.statusOK) {
                bookings.value = response.data as Data;
            }
        }
    }, { immediate: true })

    return {
        bookings,
        isLoading,
        error,
        post,
        put,
        remove,
    }
}

export type Booking = {
    id: number,
    name: string
    surname: string
    date: string
    service: string
    time: string
    numberOfPerson: number
    hasAllergy: boolean
    allergies: string
}

type Data = Booking[]

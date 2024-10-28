import { ref, watch } from "vue";
import { useAuthentication } from "./useAuthentication";
import { Services } from "@/services/_services";

export function useUser() {
    const user = ref<Data | undefined>();

    const { authentication } = useAuthentication();

    watch(authentication, () => {
        if (authentication.value) {
            const response = Services.User.get(authentication.value?.accessToken);

            if (response.statusOK) {
                const data = response.data as Data;
                user.value = data;
            }

        } else {
            user.value = undefined;
        }
    })
}

type Data = {
    name: string
    surname: string
    addres: string
    zip: string
    city: string
    email: string
    additional?: {
        numberOfPerson: number
        allergy: boolean
        allergies: string
    }
}
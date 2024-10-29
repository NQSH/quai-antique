import { ref, watch } from "vue";
import { useAuthentication } from "./useAuthentication";
import { Services } from "@/services/_services";
import { useToast } from "./useToast";
import { Helpers } from "@/helpers/_helpers";

const user = ref<Data | undefined>();

export function useUser() {

    const { authentication } = useAuthentication();
    const { popMessage } = useToast();

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

    watch(user, () => {
        if (user.value) popMessage(`Bonjour ${user.value && Helpers.FormatTool.Text.toSentenceCase(user.value?.name)} !`)
    })

    return {
        user
    }
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
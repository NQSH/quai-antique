import { ref, watch } from "vue";
import { useAuthentication } from "./useAuthentication";
import { Services } from "@/services/_services";
import { useToast } from "./useToast";
import { Helpers } from "@/helpers/_helpers";

const user = ref<Data | undefined>();

export function useUser() {

    const { popMessage } = useToast();

    function get(accessToken: string): void {
        const response = Services.User.get(accessToken);
        const data = response.data as Data;
        user.value = data;
        popMessage(`Bonjour ${user.value && Helpers.FormatTool.Text.toSentenceCase(user.value?.name)} !`)
    }

    return {
        user,
        get,
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
        hasAllergy: boolean
        allergies: string
    }
}
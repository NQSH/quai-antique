import { onMounted, ref } from "vue";
import { Services } from "@/services/_services";
import { useToast } from "./useToast";
import { Helpers } from "@/helpers/_helpers";
import type CustomResponse from "@/services/classes/CustomResponse";

const user = ref<Data | undefined>();
const isLoading = ref(false);

export function useUser() {
    const error = ref()

    const { popMessage } = useToast();

    function get(accessToken: string): void {
        const response = Services.User.get(accessToken);
        const data = response.data as Data;
        user.value = data;
        popMessage(`Bonjour ${user.value && Helpers.FormatTool.Text.toSentenceCase(user.value?.name)} !`)
    }

    function handlePost(response: CustomResponse): void {
        console.log('Handle');

        if (!response.statusOK) {
            error.value = response.message;
        }
        isLoading.value = false;
    }

    function post(payload: NewUser): void {
        isLoading.value = true;
        Services.User.post(handlePost, payload);
    }

    return {
        user,
        isLoading,
        error,
        get,
        post,
    }
}

type Data = {
    name: string
    surname: string
    address: string
    zip: string
    city: string
    email: string
    additional?: {
        numberOfPerson: number
        hasAllergy: boolean
        allergies: string
    }
}

export type NewUser = {
    name: string
    surname: string
    address: string
    zip: string
    city: string
    email: string
    password: string
    additional?: {
        numberOfPerson: number
        hasAllergy: boolean
        allergies: string
    }
}
import { ref } from "vue";

const toastMessage = ref<string | undefined>();

export function useToast() {

    function popMessage(message: string): void {

        toastMessage.value = message;
        setTimeout(() => {
            toastMessage.value = undefined;
        }, 5000)
    }

    return {
        toastMessage,
        popMessage
    }
}
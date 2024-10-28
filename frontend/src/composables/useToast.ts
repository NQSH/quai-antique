import { onMounted, ref, watch } from "vue";

export function useToast() {
    const toastMessage = ref<string | undefined>();

    function popMessage(message: string): void {
        toastMessage.value = message;
        setTimeout(() => {
            toastMessage.value = undefined;
        }, 3000)
    }

    return {
        toastMessage,
        popMessage
    }
}
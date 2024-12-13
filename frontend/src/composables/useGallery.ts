import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";
import { useModal } from "./useModal";
import { useToast } from "./useToast";

export function useGallery() {
    const images = ref<Data>([]);

    const { closeModal } = useModal();
    const { popMessage } = useToast();

    function post(): void {
        closeModal();
        popMessage('L\'image a bien été ajoutée à la galerie')
    }

    onMounted(() => {
        const response = Services.Gallery.get();
        if (response.statusOK) {
            images.value = response.data as Data;
        }
    })

    return {
        images,
        post
    }
}

export type Image = {
    path: string,
    title: string
}

type Data = Image[]

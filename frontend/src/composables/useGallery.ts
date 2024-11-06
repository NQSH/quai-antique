import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";

export function useGallery() {
    const images = ref<Data>([]);

    onMounted(() => {
        const response = Services.Gallery.get();
        if (response.statusOK) {
            images.value = response.data as Data;
        }
    })

    return {
        images
    }
}

type Image = {
    path: string,
    title: string
}

type Data = Image[]

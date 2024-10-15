import { Services } from "@/services/_services";
import { onMounted, ref, type Ref } from "vue";

export function useGallery() {
    const images = ref<Image[]>([]);

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

import { Services } from "@/services/_services";
import { onMounted, ref, type Ref } from "vue";

export function useGallery() {
    const images: Ref<Image[]> = ref([]);

    onMounted(() => {
        const response = Services.Gallery.get();
        if (response.statusOK) {
            const data = response.data as Data;
            images.value = data.images;
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

type Data = {
    images: Image[];
}

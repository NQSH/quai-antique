import { ref, shallowRef } from "vue";

const modalComponent = shallowRef();
const componentProps = ref();
const show = ref(false);

export function useModal() {

    function openModal(component: any, props: object): void {
        modalComponent.value = component;
        componentProps.value = props;
        show.value = true;
    }

    function closeModal(): void {
        show.value = false;
        setTimeout(() => {
            modalComponent.value = undefined;
            componentProps.value = undefined;
        }, 500)
    }

    return {
        modalComponent,
        componentProps,
        show,
        openModal,
        closeModal,
    }
}
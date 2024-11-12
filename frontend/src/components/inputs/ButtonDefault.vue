<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    label: string
    isLoading?: boolean
    dark?: boolean
}>()

const emits = defineEmits<{
    (e: 'onClick'): void
}>()

const style = computed(() => {
    const loadingStyle = props.isLoading ? 'loading' : '';
    const darkStyle = props.dark ? 'dark' : '';

    return `${loadingStyle} ${darkStyle}`
})

</script>

<template>
    <button @click="emits('onClick')" :class="style" :disabled="isLoading">
        {{ props.label }}
        <svg class="loading-anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </button>
</template>

<style lang="css" scoped>
button {
    position: relative;
    color: var(--color-tertiary);
    background-color: var(--color-primary);
    border-radius: 5px;
    border-width: 0px;
    padding: 5px 20px;
    font-family: var(--font-family-primary);
    cursor: pointer;
    transition: background-color 200ms;

    &.dark {
        color: white;
        background-color: var(--color-tertiary);
    }
}

.loading-anim {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
}

button.loading {
    color: transparent;
    background-color: var(--color-tertiary-light);

    & > svg.loading-anim {
        display: block;
    }
}
</style>
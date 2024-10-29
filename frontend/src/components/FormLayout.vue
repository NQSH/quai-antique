<script setup lang="ts">
import type { Reactive } from 'vue';
import ButtonDefault from './inputs/ButtonDefault.vue';
import type { Input } from './inputs/classes/_input';

const props = defineProps<{
    inputs: Reactive<Input[]>
    submitBtnLabel: string
    isLoading?: boolean
}>()

const emits = defineEmits<{
    (e: 'onSubmit', data: object): void
}>()

function onBeforeSubmit(): void {
    let isFormValid = true;
    props.inputs.forEach(input => {
        if(input.validator && !input.validator.isValid(input.value)) isFormValid = false;
    })
    if(isFormValid) {
        emits('onSubmit', Object.fromEntries(props.inputs.map(input => [input.name, input.value])));
    }
}
</script>

<template>
    <form @submit.prevent>
        <slot />
        <div>
            <ButtonDefault :label="props.submitBtnLabel" @on-click="onBeforeSubmit()" :is-loading />
            <slot name="add-buttons" />
        </div>
    </form>
</template>

<style lang="css" scoped>
form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 10px;
    margin-bottom: 30px;
}
</style>
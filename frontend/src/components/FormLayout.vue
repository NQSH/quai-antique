<script setup lang="ts">
import type { Reactive } from 'vue';
import ButtonDefault from './inputs/ButtonDefault.vue';
import type { Input } from './inputs/classes/_input';

export type FormInputs = {
    [key: string]: Input
}

const props = defineProps<{
    inputs: Reactive<FormInputs>
    submitBtnLabel: string
    isLoading?: boolean
    error?: string
}>()

const emits = defineEmits<{
    (e: 'onSubmit', data: object): void
}>()

function onBeforeSubmit(): void {
    let isFormValid = true;
    Object.keys(props.inputs).forEach(key => {
        const input = props.inputs[key];
        if(input.validator && !input.validator.isValid(input.value)) isFormValid = false;
    })
    if(isFormValid) {
        emits('onSubmit', Object.fromEntries(Object.entries(props.inputs).map(([key, input]) => [key, input.value])));
    }
}
</script>

<template>
    <form @submit.prevent>
        <slot />
        <p v-if="props.error" class="error">{{ props.error }}</p>
        <div class="bottom">
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
    padding-inline: 10px;
}

.error {
    color: var(--color-danger);
}
</style>
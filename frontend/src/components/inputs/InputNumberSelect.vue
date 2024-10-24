<script setup lang="ts">
import { computed, ref, type Reactive } from 'vue';
import { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
    options?: Object
}>()

function onClick(value: number): void {
    props.input.value += value;
    if(props.input.value < 1) props.input.value = 1;
}
</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <div class="input-container">
            <label :for="props.input.name">{{ props.input.label }}</label>
            <div class="field-container">
                <span class="btn" @click="onClick(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="17.5" stroke="#27233A"/>
                        <path stroke="#27233A" stroke-linecap="round" stroke-width="2" d="M27 18H9"/>
                    </svg>
                </span>
                <input type="text" :id="props.input.name" v-model="props.input.value" disabled/>
                <span class="btn" @click="onClick(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="17.5" stroke="#27233A"/>
                        <path stroke="#27233A" stroke-linecap="round" stroke-width="2" d="M18 9v18m9-9H9"/>
                    </svg>
                </span>
            </div>
        </div>
    </InputLayout>
</template>

<style lang="css" scoped>
input {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-content);
    color: var(--color-tertiary-light);

    width: 70px;
    height: 40px;
    border: 1px solid var(--color-tertiary);
    border-radius: 5px;
    padding-inline: 10px;

    text-align: center;
}
label {
    color: var(--color-tertiary-light);
    padding: 0px 10px;
}
.input-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.field-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
span {
    &:hover > svg {
        transform: scale(1.1);
        transition: 100ms;

        &:active {
            transform: scale(1);
        }
    }
}
</style>
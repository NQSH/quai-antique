<script setup lang="ts">
import { type Reactive } from 'vue';
import type { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
    options?: Object
}>()

function onBlur(): void {
    props.input.validator?.isValid(props.input.value);
}

function onInput(): void {
    if(props.input.validator && props.input.validator.errors.length > 0) props.input.validator.isValid(props.input.value);
}
</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <div class="input-container">
            <label :for="props.input.name">{{ props.input.label }}</label>
            <input type="time" :id="props.input.name" v-model="props.input.value" v-bind="props.options" @input="onInput" @blur="onBlur" />
        </div>
    </InputLayout>
</template>

<style lang="css" scoped>
.input-container {
    position: relative;
}

input {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-content);

    width: 100%;
    height: 40px;
    border: 1px solid var(--color-tertiary);
    border-radius: 5px;
    padding-inline: 10px;
}
label {
    position: absolute;
    top: -2px;
    left: 10px;
    padding: 0px 5px;
    transform: translateY(-50%);
    background-color: white;
    font-size: 12px;
}
</style>
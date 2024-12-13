<script setup lang="ts">
import type { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Input
}>()
</script>

<template>
    <InputLayout>
        <div class="input-container">
            <label :for="props.input.name">{{ props.input.label }}</label>
            <input type="file" :id="props.input.name" :name="props.input.name" accept="image/png, image/jpeg" />
        </div>
    </InputLayout>
</template>

<style lang="css" scoped>
.input-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
label {
    color: var(--color-tertiary-light);
    padding: 0px 10px;
}
input[type="file"]::-webkit-file-upload-button {
    position: relative;
    color: var(--color-tertiary);
    background-color: var(--color-primary);
    border-radius: 5px;
    border-width: 0px;
    padding: 5px 20px;
    font-family: var(--font-family-primary);
    cursor: pointer;
    transition: background-color 200ms;
    margin-right: 10px;
}
</style>
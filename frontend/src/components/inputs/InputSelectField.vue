v<script setup lang="ts">
import { onMounted, watch, type Reactive } from 'vue';
import type { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
}>()

</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <div class="input-container">
            <label :for="props.input.name">{{ props.input.label }}</label>
            <select v-model="props.input.value" :name="props.input.name">
                <slot />
            </select>
        </div>
    </InputLayout>
</template>

<style lang="css" scoped>
.input-container {
    position: relative;
}

select {
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
    color: var(--color-tertiary-light);
    background-color: white;
    font-size: 12px;
}
</style>
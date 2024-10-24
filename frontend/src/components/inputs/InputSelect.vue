v<script setup lang="ts">
import { onMounted, watch, type Reactive } from 'vue';
import type { Input } from './classes/_input';
import InputLayout from './InputLayout.vue';

const props = defineProps<{
    input: Reactive<Input>
    options: string[]
    default: string
}>()

watch(() => props.options, () => {
    props.input.value = props.options[0];
})

onMounted(() => {
    props.input.value = props.options[0];
})
</script>

<template>
    <InputLayout :errors="props.input.validator?.errors">
        <select v-model="props.input.value">
            <option v-for="option in options" :value="option">{{ option.split(':').join(' : ') }}</option>
        </select>
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
    background-color: white;
    font-size: 12px;
}
</style>
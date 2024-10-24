<script setup lang="ts">
const props = defineProps<{
    label: string
}>()

const emits = defineEmits<{
    (e: 'onClick'): void
}>()
</script>

<template>
    <button @click="emits('onClick')">{{ props.label }}</button>
</template>

<style lang="css" scoped>
button {
    color: var(--color-tertiary);
    background-color: var(--color-primary);
    border-radius: 5px;
    border-width: 0px;
    padding: 5px 20px;
    font-family: var(--font-family-primary);
    cursor: pointer;
}
</style>
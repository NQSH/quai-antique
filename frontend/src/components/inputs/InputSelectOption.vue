<script setup lang="ts">
const props = defineProps<{
    value: string
    options?: object
}>()
</script>

<template>
    <option :value="props.value" v-bind="options">{{ props.value.split(':').join(' : ') }}</option>
</template>
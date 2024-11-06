<script setup lang="ts">
const props = defineProps<{
    href: string
    label: string
}>()
</script>

<template>
    <a :href="props.href">{{  props.label  }}</a>
</template>

<style lang="css" scoped>
a {
    color: var(--color-tertiary);
    display: block;
    text-align: center;

    &:active {
        color: initial;
    }
}
</style>
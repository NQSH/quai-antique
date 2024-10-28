<script setup lang="ts">
const props = defineProps<{
    route: string
    name: string
    label: string
}>()
</script>

<template>
        <a :class="props.route === props.name ? 'active' : ''" :href="`#/${props.name}`">{{ props.label }}</a>
</template>
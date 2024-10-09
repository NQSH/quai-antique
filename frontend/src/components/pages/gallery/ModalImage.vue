<script setup lang="ts">
const props = defineProps<{
    path: string,
    title: string
}>()
</script>

<template>
    <div class="image-container">
        <img :src="props.path" :alt="props.title">
        <span>{{ props.title.slice(0, 1).toUpperCase() + props.title.slice(1) }}</span>
    </div>
</template>

<style lang="css" scoped>
.image-container {
    position: relative;

    & > img {
        display: block;
        width: 100%;
        object-fit: cover;
    }
    & > span {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: var(--color-white);
    }
}
</style>
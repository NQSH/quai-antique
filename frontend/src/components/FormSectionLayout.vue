<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    title: string
    centeredTitle?: boolean
    oneLined?: boolean
}>()

const sectionStyle = computed(() => {
    const isCenteret = props.centeredTitle ? 'centered' : '';
    const isOneLined = props.oneLined ? 'onelined' : '';
    return `${isCenteret} ${isOneLined}`;
})
</script>

<template>
    <section :class="sectionStyle">
        <h2 class="text-title">{{ props.title }}</h2>
        <div class="inputs-container">
            <slot />
        </div>
    </section>
</template>

<style lang="css" scoped>
section {
    width: 100%;

    & .inputs-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &.centered > h2 {
        text-align: center;
    }

    &.onelined {
        max-width: 400px;
    }
}

h2 {
    margin-bottom: 18px;
}
</style>
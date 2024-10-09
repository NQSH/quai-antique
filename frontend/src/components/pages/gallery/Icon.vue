<script setup lang="ts">
const props = defineProps<{
    isActive: boolean
}>()
</script>

<template>
    <div :class="`container ${isActive ? 'active' : ''}`">
        <slot />
    </div>
</template>

<style lang="css">
.container {
    position: relative;

    &:hover {
        transform: scale(1.2);
        transition: 200ms;
    }

    &.active {
        
        &::after {
            content: '';
            position: absolute;
            width: calc(100% + 4px);
            height: 100%;
            top: -2px;
            left: -2px;
            border-radius: 2px;
            border: 1px solid var(--color-secondary);
        }

        & > svg > rect {
            fill: var(--color-secondary);
        }
    }

    & > svg > rect {
        fill: var(--color-secondary-light);
    }
}
</style>
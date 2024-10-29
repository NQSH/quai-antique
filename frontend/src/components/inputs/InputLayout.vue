<script setup lang="ts">
const props = defineProps<{
    errors?: string[]
}>()
</script>

<template>
    <div class="container">
        <slot />
        <ul>
            <li v-for="error in props.errors">{{ error }}</li>
        </ul>
    </div>
</template>

<style lang="css" scoped>
.container {
    & > ul {
        padding-inline: 10px;
        
        & > li {
            list-style: none ;
            color: var(--color-danger);
        }
    }
}
</style>
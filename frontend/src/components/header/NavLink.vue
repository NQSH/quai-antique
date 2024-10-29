<script setup lang="ts">
import { inject } from 'vue';

const props = defineProps<{
    name: string
    label: string
}>()

const route = inject('currentRoute') as string;
const hideNav = inject('hideNav') as Function;
</script>

<template>
        <a :class="route === props.name ? 'active' : ''" :href="`#/${props.name}`" @click="() => hideNav()">{{ props.label }}</a>
</template>
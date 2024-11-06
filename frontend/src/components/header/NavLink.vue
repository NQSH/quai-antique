<script setup lang="ts">
import { useRouter } from '@/composables/useRouter';
import { inject } from 'vue';

const { currentRoute } = useRouter();

const props = defineProps<{
    name: string
    label: string
}>()

const hideNav = inject('hideNav') as Function;
</script>

<template>
        <a :class="currentRoute === props.name ? 'active' : ''" :href="`#/${props.name}`" @click="() => hideNav()">{{ props.label }}</a>
</template>
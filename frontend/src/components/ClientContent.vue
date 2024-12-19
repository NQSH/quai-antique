<script setup lang="ts">
import { Roles, useAuthentication } from '@/composables/useAuthentication';

const { authentication } = useAuthentication();
</script>

<template>
    <slot v-if="authentication?.role === Roles.USER" />
</template>
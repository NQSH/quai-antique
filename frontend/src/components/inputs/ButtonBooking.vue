<script setup lang="ts">
import { useRouter } from '@/composables/useRouter';
import ButtonDefault from './ButtonDefault.vue';

const { navigateTo } = useRouter();
</script>

<template>
    <div class="container">
        <ButtonDefault label="Réserver une table" @on-click="navigateTo('booking')"/>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
}
</style>    
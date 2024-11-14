<script setup lang="ts">
import { useAuthentication } from '@/composables/useAuthentication';
import { useRouter } from '@/composables/useRouter';
import { watch } from 'vue';

const { authentication, isLoading } = useAuthentication();
const { navigateFrom } = useRouter();

watch(isLoading, () => {        
    if(!isLoading.value && !authentication.value) {
        window.location.hash = '#/login';
    } else if(!isLoading.value && authentication.value) {
        navigateFrom();
    }
}, { immediate: true });
</script>

<template>
    <div class="container">
        <h2 class="text-title">Connexion en cours ...</h2>
        <p>Merci de patienter.</p>
        <svg class="loading-anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p {
        text-align: center;
    }
}
.loading-anim {
    color: black;
    height: 50px;
}
</style>
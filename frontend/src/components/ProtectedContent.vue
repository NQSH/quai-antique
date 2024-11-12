<script setup lang="ts">
import { useAuthentication } from '@/composables/useAuthentication';
import { useRouter } from '@/composables/useRouter';
import { useToast } from '@/composables/useToast';
import { onMounted } from 'vue';

const { authentication, isLoading } = useAuthentication();
const { redirectTo } = useRouter();
const { popMessage } = useToast();

onMounted(() => {
    if(!isLoading.value && !authentication.value) {
        popMessage('Vous devez être connecté pour accéder à cette page')
        redirectTo('login');
    }
})

</script>

<template>
    <div class="" v-if="!authentication">
        <h2 class="text-title">Tentative de connexion en cours ...</h2>
        <p>Merci de patienter.</p>
        <svg class="loading-anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
    <slot v-else />
</template>
<script setup lang="ts">
import { useAuthentication } from '@/composables/useAuthentication';
import { useRouter } from '@/composables/useRouter';
import { useToast } from '@/composables/useToast';
import { onMounted } from 'vue';

const { authentication } = useAuthentication();
const { redirectTo } = useRouter();
const { popMessage } = useToast();

onMounted(() => {
    if(!authentication.value) {
        popMessage('Vous devez être connecté pour accéder à cette page')
        redirectTo('loginRedirection');
    }
})

</script>

<template>
    <slot />
</template>
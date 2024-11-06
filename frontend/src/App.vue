<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import Toast from './components/Toast.vue';
import { useAuthentication } from './composables/useAuthentication';
import { onMounted } from 'vue';
import { useRouter } from './composables/useRouter';

const { refreshToken } = useAuthentication();
const { currentView } = useRouter();

onMounted(() => {
  refreshToken()
})

</script>

<template>
  <Header />
  <Main>
    <component :is="currentView" />
  </Main>
  <Footer />
  <Toast />
</template>
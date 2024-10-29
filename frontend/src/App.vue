<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Router from './components/Router.vue';
import Main from './components/Main.vue';
import Toast from './components/Toast.vue';
import { useAuthentication } from './composables/useAuthentication';
import { onMounted } from 'vue';

const { refreshToken } = useAuthentication();

onMounted(() => {
  refreshToken()
})

</script>

<template>
  <Router>
    <template #header>
      <Header />
    </template>
    <Main #main/>
    <template #footer>
      <Footer />
    </template>
  </Router>
  <Toast />
</template>
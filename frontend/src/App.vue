<script setup lang="ts">
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import Router from './components/Router.vue';
import Main from './components/Main.vue';

</script>

<template>
  <Header />
  <Main>
    <Router />
  </Main>
  <Footer />
</template>
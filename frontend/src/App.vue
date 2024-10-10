<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Router from './components/Router.vue';
import Main from './components/Main.vue';

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
</template>
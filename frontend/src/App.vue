<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import Toast from './components/Toast.vue';
import { useAuthentication } from './composables/useAuthentication';
import { onBeforeMount, watch } from 'vue';
import { useRouter } from './composables/useRouter';
import Modal from './components/Modal.vue';
import { useUser } from './composables/useUser';

const { refreshToken, authentication } = useAuthentication();
const { get, user } = useUser();
const { currentView } = useRouter();

onBeforeMount(() => {
    refreshToken()
})

watch(authentication, () => {
    if (authentication.value) {
        get(authentication.value.accessToken);
    } else {
        user.value = undefined;
    }
})

</script>

<template>
  <Header />
  <Main>
    <component :is="currentView" />
  </Main>
  <Footer />
  <Toast />
  <Modal />
</template>
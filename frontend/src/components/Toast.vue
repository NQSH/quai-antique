<script setup lang="ts">
import { useToast } from '@/composables/useToast';

const { toastMessage } = useToast();

</script>

<template>
    <Transition>
        <div v-if="toastMessage" class="toast-container">
            <p>{{ toastMessage }}</p>
        </div>
    </Transition>
</template>

<style lang="css" scoped>
.toast-container {
    position: fixed;
    top: calc(100vh - 50px);
    background-color: #00000050;
    padding: 10px 30px;
    border-radius: 5px;
    color: white;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
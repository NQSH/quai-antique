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
    bottom: 20px;
    background-color: #000000CC;
    padding: 10px 30px;
    border-radius: 5px;
    color: white;
    max-width: calc(100% - 20px);
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
<script setup lang="ts">
import { useModal } from '@/composables/useModal';

const { modalComponent, componentProps, show, closeModal } = useModal();
</script>

<template>
    <Teleport to="#app">
        <Transition>
            <div id="modal-container" v-show="show" @click="closeModal">
                <div id="modal-content" @click.stop>
                    <modalComponent v-bind="componentProps" v-if="modalComponent" />
                </div>
                <span class="close-button" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="css" scoped>
#modal-container {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

#modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    max-width: 100%;
    overflow: auto;
    margin-bottom: 30px;
}

.close-button {
    color: white;

    & > svg {
        width: 50px;
        height: 50px;
    }
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
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    isLoading: boolean
}>()

const loadingStyle = computed(() => {
    const baseStyle = 'icon-loading';
    return props.isLoading ? `${baseStyle} active` : baseStyle;
})
</script>

<template>
    <div class="icon-container">
        <svg :class="loadingStyle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="none" stroke-opacity="1" stroke="#FFFFFF" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
    </div>
</template>

<style lang="css" scoped>
.icon-container {
    position: relative;
}
.icon-loading {
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;

    &.active {
        display: block;
    }
}
</style>
<script setup lang="ts">
import { computed, ref } from 'vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import Details from './menu/Details.vue';
import Formulas from './menu/Formulas.vue';
import ButtonBooking from '../inputs/ButtonBooking.vue';

const isSwitched = ref(false);

function onTitleClick(value: boolean): void {
    isSwitched.value = value;
}

const currentContent = computed(() => {
    return !isSwitched.value ? Formulas : Details;
})
</script>

<template>
    <PageContent>
        <TitleContent>
            <span :class="`title ${!isSwitched ? 'active' : ''}`" @click="onTitleClick(false)">Nos formules</span>
            <span class="title-separator"> | </span>
            <span :class="`title ${isSwitched ? 'active' : ''}`" @click="onTitleClick(true)">À la carte</span>
        </TitleContent>
        <div class="switch-container">
            <div :class="`switch-marker ${!isSwitched ? 'active' : ''}`"></div>
            <div :class="`switch-marker ${isSwitched ? 'active' : ''}`"></div>
        </div>
        <component :is="currentContent" />
        <ButtonBooking />
    </PageContent>
</template>

<style lang="css" scoped>
.title:not(.active) {
    color: var(--color-tertiary-light);
}

.switch-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
}
.switch-marker {
    width: 100px;
    height: 5px;
    background-color: var(--color-secondary-light);

    &.active {
        background-color: var(--color-secondary);
        outline: 1px solid var(--color-secondary);
    }
}

@media (max-width: 410px) {
    .title {
        display: block;
    }
    .title-separator {
        display: none;
    }
}
</style>
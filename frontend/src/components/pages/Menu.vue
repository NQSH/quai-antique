<script setup lang="ts">
import { computed, ref } from 'vue';
import PageContent from '../PageContent.vue';
import TitleContent from '../TitleContent.vue';
import Details from './menu/Details.vue';
import Formulas from './menu/Formulas.vue';
import ButtonDefault from '../inputs/ButtonDefault.vue';

const isSwitched = ref(false);

function onTitleClick(value: boolean): void {
    isSwitched.value = value;
}

function onCtaClick(): void {
    window.location.href = '#/booking';
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
    </PageContent>
    <div id="button-cta">
        <ButtonDefault label="Réserver une table" @onClick="onCtaClick"/>
    </div>
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
    margin-bottom: 30px;
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

#button-cta {
    padding: 30px 0px;
}
</style>
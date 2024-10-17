<script setup lang="ts">
import { DrinkCategory, type Drink } from '@/composables/useMenu';
import DrinkSectionCategory from './DrinkSectionCategory.vue';

const props = defineProps<{
    details?: Drink[]
}>()

function filteredList(category: DrinkCategory): Array<Drink> {
    return props.details?.filter(drink => drink.category === category) || [];
}
</script>

<template>
    <h2 class="text-subtitle">Nos boissons</h2>
    <DrinkSectionCategory title="Les softs" :articles="filteredList(DrinkCategory.SOFT)"/>
    <DrinkSectionCategory title="Les cocktails sans alcool" :articles="filteredList(DrinkCategory.SOFT_COCKTAIL)"/>
    <DrinkSectionCategory title="Les cocktails" :articles="filteredList(DrinkCategory.HARD_COCKTAIL)"/>
    <DrinkSectionCategory title="Les bières" :articles="filteredList(DrinkCategory.BEER)"/>
    <DrinkSectionCategory title="Les vins" :articles="filteredList(DrinkCategory.WINE)"/>
    <DrinkSectionCategory title="Les digestif" :articles="filteredList(DrinkCategory.COFFEE)"/>
</template>
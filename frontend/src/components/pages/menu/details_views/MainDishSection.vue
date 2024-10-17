<script setup lang="ts">
import { MainCategory, type MainDish } from '@/composables/useMenu';
import MainDishSectionCaterogy from './MainDishSectionCaterogy.vue';

const props = defineProps<{
    details?: MainDish[]
}>()

function filteredList(category: MainCategory): Array<MainDish> {
    return props.details?.filter(dish => dish.category === category) || [];
}
</script>

<template>
    <h2 class="text-subtitle">Nos plats</h2>
    <MainDishSectionCaterogy title="Les viandes" :articles="filteredList(MainCategory.MEAT)"/>
    <MainDishSectionCaterogy title="Les poissons" :articles="filteredList(MainCategory.FISH)"/>
    <MainDishSectionCaterogy title="Les végés" :articles="filteredList(MainCategory.VEGE)"/>
    <MainDishSectionCaterogy title="À partager" :articles="filteredList(MainCategory.SHARE)"/>
</template>
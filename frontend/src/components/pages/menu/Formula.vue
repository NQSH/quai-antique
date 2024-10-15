<script setup lang="ts">
import { FormulaCategory, type Formula } from '@/composables/useMenu';
import { Helpers } from '@/helpers/_helpers';
import { computed } from 'vue';

const props = defineProps<{
    formula: Formula,
    category: FormulaCategory,
}>()

const categoryStyle = computed(() => {
    return props.category === FormulaCategory.LUNCH ? 'lunch' : 'diner';
})
</script>

<template>
    <article :class="categoryStyle">
        <h3 class="text-subtitle">{{ Helpers.FormatTool.Text.toSentenceCase(props.formula.title) }}</h3>
        <section v-if="props.formula.details.starter">
            <h4 class="text-title">Entrée</h4>
            <p v-for="dish in props.formula.details.starter">{{ Helpers.FormatTool.Text.toSentenceCase(dish) }}</p>
        </section>
        <section v-if="props.formula.details.main">
            <h4 class="text-title">Plat</h4>
            <p v-for="dish in props.formula.details.main">{{ Helpers.FormatTool.Text.toSentenceCase(dish) }}</p>
        </section>
        <section v-if="props.formula.details.dessert">
            <h4 class="text-title">Dessert</h4>
            <p v-for="dish in props.formula.details.dessert">{{ Helpers.FormatTool.Text.toSentenceCase(dish) }}</p>
        </section>
        <span class="price">{{ props.formula.price + "€" }}</span>
    </article>
</template>

<style lang="css" scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;

    &.lunch {
        & > h3, h4 {
            color: var(--color-tertiary);
        }
        
        & > section > p {
            color: var(--color-tertiary-light);
        }
        
        & > .price {
            color: var(--color-secondary);
        }
    }

    &.diner {
        & > h3, h4 {
            color: var(--color-secondary-light);
        }
        
        & > section > p {
            color: var(--color-secondary);
        }
        
        & > .price {
            color: var(--color-tertiary-light);
        }
    }
}

.price {
    font-size: 36px;
    font-family: var(--font-family-secondary);
    line-height: 36px;
}

section > p:not(:last-child)::after {
    content: "OU";
    display: block;
}

</style>
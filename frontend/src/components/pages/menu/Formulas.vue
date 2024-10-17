<script setup lang="ts">
import { FormulaCategory, useMenu } from '@/composables/useMenu';
import { computed } from 'vue';
import Formula from './Formula.vue';
import IconChildMeal from './icons/IconChildMeal.vue';
import { Helpers } from '@/helpers/_helpers';

const { menu } = useMenu();

const lunchFormulas = computed(() => {
    return menu.value?.formulas.filter(formula => formula.category === FormulaCategory.LUNCH);
})
const dinerFormulas = computed(() => {
    return menu.value?.formulas.filter(formula => formula.category === FormulaCategory.DINER);
})
</script>

<template>
    <div class="main-container">
        <section class="category-container">
            <div class="title-container">
                <h2 class="text-title lunch">Le Midi</h2>
            </div>
            <div class="formulas-container lunch">
                <Formula v-for="formula in lunchFormulas" :formula :category="FormulaCategory.LUNCH" />
            </div>
        </section>
        <section class="category-container">
            <div class="title-container">
                <h2 class="text-title diner">Le Soir</h2>
            </div>
            <div class="formulas-container diner">
                <Formula v-for="formula in dinerFormulas" :formula :category="FormulaCategory.DINER" />
            </div>  
        </section>
    </div>
    <section class="childmeal-container">
         <img class="icon" src="/img-menu-childmeal.png" alt="icon-maindish">
        <div class="childmeal-details">
            <h2 class="text-title child-title">{{ Helpers.FormatTool.Text.toSentenceCase(menu?.kidMenu.title) }}</h2>
            <p v-for="dish in menu?.kidMenu.details">{{ Helpers.FormatTool.Text.toSentenceCase(dish) }}</p>
            <span class="text-title">{{ menu?.kidMenu.price }}€</span>
        </div>
    </section>
</template>

<style lang="css" scoped>
.main-container {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 30px;
}

.category-container {
    width: 100%;
}

.title-container {
    display: flex;
    justify-content: center;
}

.main-container h2 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 289px;
    text-align: center;
    border-radius: 10px 10px 0px 0px;

    &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 100%;
        left: -30px;
        border-radius: 10px;
    }

    &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 100%;
        right: -30px;
        border-radius: 10px;
    }
    
    &.lunch {
        background-color: var(--color-secondary-light);
        color: var(--color-tertiary);

        &::before {
            box-shadow: 10px 10px 0px var(--color-secondary-light);
        }

        &::after {
            box-shadow: -10px 10px 0px var(--color-secondary-light);
        }
    }
    
    &.diner {
        background-color: var(--color-tertiary);
        color: var(--color-secondary-light);
        
        &::before {
            box-shadow: 10px 10px 0px var(--color-tertiary);
        }

        &::after {
            box-shadow: -10px 10px 0px var(--color-tertiary);
        }
    }
}

.formulas-container {
    padding: 30px 18px;
    border-radius: 10px;

    & > *:not(:last-child)::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        margin-bottom: 30px;
    }

    &.lunch {
        background-color: var(--color-secondary-light);

        & > *:not(:last-child)::after {
            background-color: var(--color-secondary);
        }
    }

    &.diner {
        background-color: var(--color-tertiary);

        & > *:not(:last-child)::after {
            background-color: var(--color-secondary-light);
        }
    }
}

.childmeal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > .icon {
        margin-block: 20px;
    }
}

.childmeal-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>
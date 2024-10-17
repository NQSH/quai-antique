<script setup lang="ts">
import { FormulaCategory, useMenu } from '@/composables/useMenu';
import { computed, ref } from 'vue';
import Formula from './Formula.vue';
import { Helpers } from '@/helpers/_helpers';

const isSwitched = ref(false);

const { menu } = useMenu();

const lunchFormulas = computed(() => {
    return menu.value?.formulas.filter(formula => formula.category === FormulaCategory.LUNCH);
})
const dinerFormulas = computed(() => {
    return menu.value?.formulas.filter(formula => formula.category === FormulaCategory.DINER);
})

function onSwitch(value: boolean): void {
    isSwitched.value = value;
}
</script>

<template>
    <div :class="`main-container ${isSwitched ? 'switched' : ''}`">
        <section class="category-container lunch">
            <div class="title-container lunch" @click="onSwitch(false)">
                <h2 class="text-title lunch">Le Midi</h2>
            </div>
            <div class="formulas-container lunch">
                <Formula v-for="formula in lunchFormulas" :formula :category="FormulaCategory.LUNCH" />
            </div>
        </section>
        <section class="category-container diner">
            <div class="title-container diner" @click="onSwitch(true)">
                <h2 class="text-title diner">Le Soir</h2>
            </div>
            <div class="formulas-container diner">
                <Formula v-for="formula in dinerFormulas" :formula :category="FormulaCategory.DINER" />
            </div>
        </section>
        <div class="tab-container">
            <div class="tab tab-left"></div>
            <div class="tab tab-right"></div>
        </div>
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
    overflow: hidden;
}

.category-container {
    width: 100%;
}

.title-container {
    display: flex;
    justify-content: center;

    & h2 {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 769px) {
        & h2 {
            position: relative;
            width: 289px;
            text-align: center;
            border-radius: 10px 10px 0px 0px;
    
            &::before {
                content: "";
                position: absolute;
                width: 20px;
                height: 100%;
                left: -20px;
                border-radius: 10px;
            }
    
            &::after {
                content: "";
                position: absolute;
                width: 20px;
                height: 100%;
                right: -20px;
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

@media (max-width: 768px) {
    .main-container {
        --current-tab-color: var(--color-secondary-light);

        & * {
            transition: 300ms;
        }
    }

    .formulas-container.lunch,
    .formulas-container.diner {
        background-color: var(--current-tab-color);
    }

    .formulas-container {
        border-radius: 0px 10px 10px 10px;
    }

    .category-container.diner {
        position: absolute;
        z-index: 0;
    }

    .category-container.lunch {
        z-index: 1;
        pointer-events: none;
    }

    .title-container {
        width: 50%;

        &.diner {
            position: relative;
            left: 100%;
            transform: translateX(-100%);
        }
    }

    .tab-container {
        position: absolute;
        width: 50%;
        height: 51px;
        left: 0px;
        z-index: -1;
    }

    .tab {
        position: relative;
        display: flex;
        width: 60%;
        height: 100%;
    }

    .tab-left {
        border-radius: 10px 0 0 0;
        background-color: var(--current-tab-color);

        &::before {
            content: "";
            position: absolute;
            width: 0px;
            height: 100%;
            right: 100%;
            border-radius: 0 0 10px 0;
            box-shadow: 10px 10px var(--current-tab-color);
        }
    }

    .tab-right {
        top: -100%;
        left: calc(40%);
        transform: skew(30deg);
        border-radius: 0 10px 0 0;
        background-color: var(--current-tab-color);

        &::after {
            content: "";
            position: absolute;
            background: transparent;
            width: 20px;
            height: 100%;
            left: 100%;
            border-radius: 0 0 0 10px;
            box-shadow: -10px 10px var(--current-tab-color);
            transition: var(--transistion-timing);
        }
    }

    .main-container.switched {
        --current-tab-color: var(--color-tertiary);
        
        & .tab-container {
            left: 50%;

            & .tab-left {
                transform: skew(-30deg);
                border-radius: 10px 0 0 0;

                &::before {
                    width: 20px;
                }
            }

            & .tab-right {
                transform: skew(0deg);
                border-radius: 0 10px 0 0;

                &::after {
                    width: 0px;
                }
            }
        }

        & .category-container.diner {
            position: absolute;
            z-index: 1;
            pointer-events: none;
        }

        & .category-container.lunch {
            z-index: 0;
            pointer-events: auto;
        }

        & .formulas-container {
            border-radius: 10px 0px 10px 10px;
        }
    }
}
</style>
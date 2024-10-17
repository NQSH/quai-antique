<script setup lang="ts">
import { useMenu } from '@/composables/useMenu';
import { ref } from 'vue';
import StarterSection from './details_views/StarterSection.vue';
import MainDishSection from './details_views/MainDishSection.vue';
import DrinkSection from './details_views/DrinkSection.vue';
import DessertSection from './details_views/DessertSection.vue';

const { menu } = useMenu();

const currentDetailsView = ref('starter');

function onIconClick(view: string): void {
    currentDetailsView.value = view;
}

</script>

<template>
    <div id="details-main-container">
        <nav class="nav-container">
            <div :class="`icon-container ${currentDetailsView === 'starter' ? 'active' : ''}`" @click="onIconClick('starter')">
                <img src="/img-icon-menu-starter.png" alt="icon-starter">
            </div>
            <div :class="`icon-container ${currentDetailsView === 'main' ? 'active' : ''}`" @click="onIconClick('main')">
                <img src="/img-icon-menu-maindish.png" alt="icon-maindish">
            </div>
            <div :class="`icon-container ${currentDetailsView === 'dessert' ? 'active' : ''}`" @click="onIconClick('dessert')">
                <img src="/img-icon-menu-dessert.png" alt="icon-dessert">
            </div>
            <div :class="`icon-container ${currentDetailsView === 'drink' ? 'active' : ''}`" @click="onIconClick('drink')">
                <img src="/img-icon-menu-drink.png" alt="icon-drink">
            </div>
            <span class="onglet"></span>
        </nav>
        <section class="details-container">
            <StarterSection v-if="currentDetailsView === 'starter'" :details="menu?.details.starter"/>
            <MainDishSection v-if="currentDetailsView === 'main'" :details="menu?.details.main" />
            <DessertSection v-if="currentDetailsView === 'dessert'" :details="menu?.details.dessert"/>
            <DrinkSection v-if="currentDetailsView === 'drink'" :details="menu?.details.drink"/>
        </section>
    </div>
</template>

<style lang="css">
#details-main-container {

    & h2 {
        text-align: center;
        margin-bottom: 30px;
    }
    
    & .nav-container {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;

        &:has(.active:nth-child(1)) ~ .details-container {
            border-radius: 0px 10px 10px 10px;
        }

        &:has(.active:nth-child(4)) ~ .details-container {
            border-radius: 10px 0px 10px 10px;
        }

        & .active {
            filter: brightness(0) saturate(100%) invert(10%) sepia(23%) saturate(1323%) hue-rotate(210deg) brightness(97%) contrast(89%);
        }

        & .active:nth-child(1) ~ .onglet {
            left: 0px;
            &::before {
                width: 0px;
            }
            &::after {
                left: 100%;
            }
        }

        & .active:nth-child(2) ~ .onglet {
            left: 25%;
        }

        & .active:nth-child(3) ~ .onglet {
            left: 50%;
        }

        & .active:nth-child(4) ~ .onglet {
            left: 75%;

            &::after {
                width: 0;
            }
        }

        & .onglet {
            position: absolute;
            width: 25%;
            height: 100%;
            background-color: var(--color-secondary-light);
            border-radius: 10px 10px 0px 0px;
            transition: 300ms ease-out;
            z-index: -1;
            
            &::before {
                content: '';
                position: relative;
                display: inline-block;
                width: 20px;
                height: 100%;
                box-shadow: 10px 10px 0px var(--color-secondary-light);
                border-radius: 0px 0px 10px 0px;
                left: -20px;
            }
            
            &::after {
                content: '';
                position: relative;
                display: inline-block;
                width: 20px;
                height: 100%;
                box-shadow: -10px 10px 0px var(--color-secondary-light);
                border-radius: 0px 0px 0px 10px;
                left: calc(100% - 20px);
            }
        }
    }
    
    & .icon-container {
        filter: brightness(0) saturate(100%) invert(92%) sepia(12%) saturate(440%) hue-rotate(43deg) brightness(84%) contrast(80%);
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    
    & .details-container {
        background-color: var(--color-secondary-light);
        padding: 30px 10px;
        border-radius: 10px 10px 10px 10px;
        transition: 300ms ease-in-out;

        & ul {
            padding: 0px 10px;

            &.articles > .article:not(:last-child)::after {
                content: '';
                display: block;
                width: 100%;
                min-height: 1px;
                background-color: var(--color-secondary);
                margin-block: 30px;
            }
        }

        & li {
            list-style: none;

            & article {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 30px;
            }

            & .article-title {
                color: var(--color-tertiary);
            }

            & .article-description {
                color: var(--color-tertiary-light)
            }

            & .article-price {
                display: flex;
                align-items: center;
                font-family: var(--font-family-secondary);
                font-size: var(--font-size-title);
                color: var(--color-secondary);
            }
        }

        & .category-container {

            &:not(:last-child) {
                margin-bottom: 40px;
            }

            & h3 {
                margin-bottom: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;

                &::before {
                    content: '';
                    display: block;
                    width: 20px;
                    height: 1px;
                    background-color: var(--color-secondary);
                    margin-top: 5px;
                    margin-right: 10px;
                }

                &::after {
                    content: '';
                    display: block;
                    flex: 1;
                    height: 1px;
                    background-color: var(--color-secondary);
                    margin-top: 5px;
                    margin-left: 10px;
                }
            }

            & ul {
                padding-left: 20px;
            }

            & .article:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
}


</style>
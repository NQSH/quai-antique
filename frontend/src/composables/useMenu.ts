import { Services } from "@/services/_services";
import { onMounted, ref } from "vue";

export enum MainCategory { MEAT = "meat", FISH = "fish", VEGE = "vege", SHARE = "share" }
export enum DrinkCategory { SOFT = "soft", SOFT_COCKTAIL = "soft_cocktail", HARD_COCKTAIL = "hard_cocktail", BEER = "beer", WINE = "wine", COFFEE = "coffee" }
export enum FormulaCategory { LUNCH = "lunch", DINER = "diner" }

export function useMenu() {
    const menu = ref<Data>();

    onMounted(() => {
        const response = Services.Menu.get();
        if (response.statusOK) {
            menu.value = response.data as Data;
        }
    })

    return {
        menu
    }
}

export type Starter = {
    id: number
    title: string
    description: string
    price: number
}

export type MainDish = {
    id: number
    title: string
    description: string
    category: MainCategory
    price: number
}

export type Dessert = {
    id: number
    title: string
    description: string
    price: number
}

export type Drink = {
    id: number
    title: string
    category: DrinkCategory
    price: number
}

export type Formula = {
    id: number
    category: FormulaCategory
    title: string
    details: {
        starter?: string[]
        main?: string[]
        dessert?: string[]
    }
    price: number
}

type Data = {
    details: {
        starter: Starter[]
        main: MainDish[]
        dessert: Dessert[]
        drink: Drink[]
    }
    formulas: Formula[]
    kidMenu: {
        title: string
        details: string[]
        price: number
    }
}
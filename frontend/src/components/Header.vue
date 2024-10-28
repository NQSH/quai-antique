<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import IconBurger from './header/IconBurger.vue';
import IconAccount from './header/IconAccount.vue';
import { useAuthentication } from '@/composables/useAuthentication';

const { authentication, isLoading } = useAuthentication();

const showAccountNav = ref(false);
const showMainNav = ref(false);

const accountNavStyle = computed(() => {
    return `account-nav${showAccountNav.value ? ' show' : ''}`;
})

const mainNavStyle = computed(() => {
    return `main-nav${showMainNav.value ? ' show' : ''}`;
})

function switchAccountNavDisplay() {
    if(isLoading.value) return;

    if(showMainNav.value) {
        showMainNav.value = false;
    }

    showAccountNav.value = !showAccountNav.value;
}

function switchMainNavDisplay() {
    if(showAccountNav.value) {
        showAccountNav.value = false;
    }

    showMainNav.value = !showMainNav.value;
}

const route = inject('currentRoute');

const accountIconStyle = computed(() => {
    const baseStyle = 'icon icon-account';
    return isLoading ? baseStyle + ' loading' : baseStyle;
})
</script>

<template>
<header>
    <a href="#/" class="brand text-title">Quai Antique</a>
    <IconBurger class="icon icon-burger" @click="switchMainNavDisplay"/>
    <nav :class="mainNavStyle">
        <a :class="route === '' ? 'active' : ''" href="#/">Accueil</a>
        <a :class="route === 'gallery' ? 'active' : ''" href="#/gallery">Galerie</a>
        <a :class="route === 'menu' ? 'active' : ''" href="#/menu">Menu</a>
        <a :class="route === 'booking' ? 'active' : ''" href="#/booking">Réserver</a>
    </nav>
    <IconAccount :class="'icon icon-account'" @click="switchAccountNavDisplay" />
    <nav :class="accountNavStyle" v-if="!authentication">
        <a :class="route === 'signin' ? 'active' : ''" href="#/signin">Devenir client</a>
        <a :class="route === 'login' ? 'active' : ''" href="#/login">Se connecter</a>
    </nav>
    <nav :class="accountNavStyle" v-if="authentication">
        <a :class="route === 'account' ? 'active' : ''" href="#/account">Mon compte</a>
        <a :class="route === 'bookings' ? 'active' : ''" href="#/bookings">Mes réservations</a>
        <a href="#/logout">Se connecter</a>
    </nav>
</header>
</template>

<style lang="css" scoped>
header {
    position: relative;
    width: 100%;
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    gap: 30px;

    & * {
        text-decoration: none;
    }
}

.brand {
    color: var(--color-tertiary-light);
    flex: 1;
}

nav > a {
    color: var(--color-white);

    &.active {
        border-bottom: 2px solid white;
    }
}

.main-nav {
    display: flex;
    gap: 30px;
}

.account-nav {
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0px 20px;
    max-height: 0px;
    gap: 18px;
    transition: 300ms;
    overflow: hidden;

    &.show {
        padding: 10px 20px;
        max-height: 500px;
        z-index: 1;
    }
}

.icon {
    width: 20px;
    height: 20px;
    color: white;
    cursor: pointer;
    transition: 300ms;
}

.icon-burger {
    display: none;
}

.icon-account.loading {
    color: var(--color-tertiary-light)
}

@media (max-width: 992px) {
    .icon-burger {
        display: block;
        order: 1;
    }
    
    .brand {
        order: 2;
        flex: 1;
        text-align: center;
    }

    .icon-account {
        order: 3;
    }

    .main-nav {
        position: absolute;
        top: 100%;
        left: 0px;
        width: 100%;
        background: var(--color-primary);
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0px 20px;
        max-height: 0px;
        gap: 18px;
        transition: 300ms;
        overflow: hidden;

        &.show {
            padding: 10px 20px;
            max-height: 500px;
            z-index: 1;
        }
    }

    
}
</style>
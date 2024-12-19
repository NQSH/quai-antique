<script setup lang="ts">
import { computed, inject, provide, ref } from 'vue';
import IconBurger from './header/IconBurger.vue';
import IconAccount from './header/IconAccount.vue';
import { useAuthentication } from '@/composables/useAuthentication';
import NavLink from './header/NavLink.vue';
import { useUser } from '@/composables/useUser';
import AdminContent from './AdminContent.vue';
import ClientContent from './ClientContent.vue';

const { authentication, isLoading, logOut } = useAuthentication();
const { user } = useUser();

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
        setTimeout(() => { showAccountNav.value = !showAccountNav.value; }, 100)
    } else showAccountNav.value = !showAccountNav.value;
}

function switchMainNavDisplay() {
    if(showAccountNav.value) {
        showAccountNav.value = false;
        setTimeout(() => { showMainNav.value = !showMainNav.value; }, 100)
    } else showMainNav.value = !showMainNav.value;
}

function hideNav(): void {
    showMainNav.value = false;
    showAccountNav.value = false;
}

const accountIconStyle = computed(() => {
    const baseStyle = 'icon icon-account';
    const loadingStyle = isLoading.value ? 'loading' : '';
    const loggedStyle = user.value ? 'logged' : '';

    return `${baseStyle} ${loadingStyle} ${loggedStyle}`;
})

provide('hideNav', hideNav);
</script>

<template>
<header>
    <a href="#/" class="brand text-title">Quai Antique</a>
    <IconBurger class="icon icon-burger" @click="switchMainNavDisplay" />
    <nav :class="mainNavStyle">
        <NavLink name="" label="Accueil" />
        <NavLink name="gallery" label="Galerie" />
        <NavLink name="menu" label="Menu" />
        <NavLink name="booking" label="Réserver" />
    </nav>
    <IconAccount :class="accountIconStyle" @click="switchAccountNavDisplay" :is-loading/>
    <nav :class="accountNavStyle" v-if="!authentication">
        <NavLink name="signin" label="Devenir client" />
        <NavLink name="login" label="Se connnecter" />
    </nav>
    <nav :class="accountNavStyle" v-if="authentication">
        <NavLink name="account" label="Mon compte" />
        <AdminContent>
            <NavLink name="bookings" label="Voir les réservations" />
        </AdminContent>
        <ClientContent>
            <NavLink name="bookings" label="Mes réservations" />
        </ClientContent>
        <span @click="logOut">
            <NavLink name="" label="Se déconnecter" />
        </span>
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

nav :deep(a) {
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
    transition: 100ms ease-in-out;
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
    transition: 200ms;
}

.icon-burger {
    display: none;
}

.icon-account.logged {
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
        transition: 100ms ease-in-out;
        overflow: hidden;

        &.show {
            padding: 10px 20px;
            max-height: 500px;
            z-index: 1;
        }
    }

    
}
</style>
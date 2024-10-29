<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, provide, ref } from 'vue';
import Home from '@/components/pages/Home.vue';
import Menu from '@/components/pages/Menu.vue';
import Gallery from '@/components/pages/Gallery.vue';
import Booking from '@/components/pages/Booking.vue';
import NotFound from '@/components/pages/NotFound.vue';
import LogIn from './pages/LogIn.vue';

const routes = [
    {
        path: '/',
        component: Home,
        title: 'Accueil'
    },
    {
        path: '/menu',
        component: Menu,
        title: 'Menu'
    },
    {
        path: '/gallery',
        component: Gallery,
        title: 'Galerie'
    },
    {
        path: '/booking',
        component: Booking,
        title: 'Réservation'
    },
    {
        path: '/login',
        component: LogIn,
        title: 'Connexion'
    }
]

const currentPath = ref('');
const currentRoute = ref('');

function update() {
    const hash = window.location.hash;
    currentPath.value = hash;
    currentRoute.value = hash.slice(2) || '';
}

onBeforeMount(() => {
    window.addEventListener('hashchange', update);
    update();
});
onBeforeUnmount(() => window.removeEventListener('hashchange', update));

const currentView = computed(() => {
    for (const route of routes) {
        const path = currentPath.value.slice(1) || '/';

        if (route.path === path) {
            document.title = route.title + ' - Quai Antique';
            return route.component;
        }
    }
    document.title = 'Page non trouvée - Quai Antique';
    return NotFound;
})

provide('currentRoute', currentRoute);
</script>

<template>
    <slot name="header" />
    <slot name="main">
        <component :is="currentView" />
    </slot>
    <slot name="footer" />
</template>
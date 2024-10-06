<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Home from '@/components/pages/Home.vue';
import Menus from '@/components/pages/Menus.vue';
import Gallery from '@/components/pages/Gallery.vue';
import Booking from '@/components/pages/Booking.vue';
import NotFound from '@/components/pages/NotFound.vue';

const routes = [
    {
        path: '/',
        component: Home,
        title: 'Accueil'
    },
    {
        path: '/menus',
        component: Menus,
        title: 'Menus'
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
    }
]

const currentPath = ref(window.location.hash);

function update() {
    currentPath.value = window.location.hash
}

onMounted(() => window.addEventListener('hashchange', update));
onUnmounted(() => window.removeEventListener('hashchange', update));

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
</script>

<template>
    <component :is="currentView" />
</template>
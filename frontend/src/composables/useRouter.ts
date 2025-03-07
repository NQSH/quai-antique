import Account from "@/components/pages/Account.vue";
import Booking from "@/components/pages/Booking.vue";
import Bookings from "@/components/pages/Bookings.vue";
import Gallery from "@/components/pages/Gallery.vue";
import Home from "@/components/pages/Home.vue";
import LogIn from "@/components/pages/LogIn.vue";
import LogInRedirection from "@/components/pages/LogInRedirection.vue";
import Menu from "@/components/pages/Menu.vue";
import NotFound from "@/components/pages/NotFound.vue";
import SignIn from "@/components/pages/SignIn.vue";
import { computed, onBeforeMount, onBeforeUnmount, ref } from "vue";

const currentPath = ref('');
const fromPath = ref();

export function useRouter() {
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
        },
        {
            path: '/loginRedirection',
            component: LogInRedirection,
            title: 'Redirection de connexion'
        },
        {
            path: '/signin',
            component: SignIn,
            title: 'Inscription'
        },
        {
            path: '/account',
            component: Account,
            title: 'Mon compte'
        },
        {
            path: '/bookings',
            component: Bookings,
            title: 'Mes réservations'
        },
    ]

    function update() {
        currentPath.value = window.location.hash;
    }

    function redirectTo(path: string): void {
        fromPath.value = currentPath.value;
        window.location.hash = `#/${path}`;
    }

    function navigateTo(path: string): void {
        fromPath.value = undefined;
        window.location.hash = `#/${path}`;
    }

    function navigateFrom(): void {
        window.location.hash = fromPath.value || '#/';
        fromPath.value = undefined;
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

    const currentRoute = computed(() => currentPath.value.slice(2) || '')

    return {
        currentView,
        currentRoute,
        redirectTo,
        navigateTo,
        navigateFrom,
    }
}
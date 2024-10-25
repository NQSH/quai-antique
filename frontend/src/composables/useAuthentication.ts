import { Services } from "@/services/_services";
import type CustomResponse from "@/services/classes/CustomResponse";
import { onMounted, ref } from "vue";

export enum Roles { 'USER', 'ADMIN' }

export function useAuthentication() {
    const authentication = ref<Data | null>();
    const isLoading = ref(false);
    const error = ref();

    function loading(value: boolean): void {
        isLoading.value = value;
    }

    function handleLogIn(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        loading(false);
    }

    function logIn(email: string, password: string): void {
        loading(true);
        Services.Authentication.logIn(handleLogIn, { email, password });
    }

    function handleLogOut(): void {

    }

    function logOut(): void {
        authentication.value = null;
        Services.Authentication.logOut(handleLogOut);
    }

    function handleSignIn(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        loading(false);
    }

    function signIn(email: string, password: string): void {
        loading(true);
        Services.Authentication.signIn(handleSignIn, { email, password });
    }

    function handleSignOut(): void {
        authentication.value = null;
    }

    function signOut(): void {
        Services.Authentication.signOut(handleSignOut);
    }

    function handleRefreshToken(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        loading(false);
    }

    function refreshToken(): void {
        loading(true);
        const refreshToken = getCookie('refreshToken');
        if (refreshToken) {
            Services.Authentication.refreshToken(handleRefreshToken, { token: refreshToken })
        }
    }

    onMounted(() => {
        refreshToken();
    })

    return {
        authentication,
        error,
        logIn,
        logOut,
        signIn,
        signOut,
        refreshToken,
    }
}

type Data = {
    accessToken: string,
    role: Roles
}

function getCookie(name: string): string | null {
    const cookieArray = document.cookie.split('; ');

    for (let cookie of cookieArray) {
        let [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}
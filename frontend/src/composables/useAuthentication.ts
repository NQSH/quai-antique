import { Services } from "@/services/_services";
import type CustomResponse from "@/services/classes/CustomResponse";
import { ref } from "vue";
import { useToast } from "./useToast";

export enum Roles { 'USER', 'ADMIN' }

const authentication = ref<Data>();
const isLoading = ref(false);
const error = ref();

export function useAuthentication() {
    const { popMessage } = useToast();


    function loading(value: boolean): void {
        isLoading.value = value;
    }

    function handleLogIn(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        else error.value = response.message;
        loading(false);
    }

    function logIn(payload: { email: string, password: string }): void {
        loading(true);
        error.value = undefined;
        const { email, password } = payload;
        Services.Authentication.logIn(handleLogIn, { email, password });
    }

    function handleLogOut(): void {
        popMessage("Votre session a été déconnectée");
    }

    function logOut(): void {
        authentication.value = undefined;
        Services.Authentication.logOut(handleLogOut);
    }

    function handleSignIn(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        loading(false);
    }

    function signIn(payload: { email: string, password: string }): void {
        loading(true);
        const { email, password } = payload;
        Services.Authentication.signIn(handleSignIn, { email, password });
    }

    function handleSignOut(): void {
        authentication.value = undefined;
        popMessage("Votre compte a bien été supprimé");
    }

    function signOut(): void {
        Services.Authentication.signOut(handleSignOut);
    }

    function handleRefreshToken(response: CustomResponse): void {
        if (response.statusOK) authentication.value = response.data as Data;
        else if (response.message) popMessage(response.message);
        loading(false);
    }

    function refreshToken(): void {
        loading(true);
        const refreshToken = getCookie('refreshToken');
        if (refreshToken) {
            Services.Authentication.refreshToken(handleRefreshToken, { token: refreshToken })
        } else {
            loading(false);
        }
    }

    return {
        authentication,
        isLoading,
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
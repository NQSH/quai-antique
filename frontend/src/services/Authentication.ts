import { withDelayRequest } from "./_withDelayRequest";
import CustomResponse from "./classes/CustomResponse";

function logIn(payload: { email: string, password: string }): CustomResponse {
    const { email, password } = payload;
    if (email === 'admin@quai-antique.fr' && password === "1234") {
        document.cookie = "refreshToken=" + 'adminRefreshToken' + new Date().getDate();
        return new CustomResponse(true, {
            accessToken: 'adminAccessToken',
            role: 'ADMIN'
        })
    } else if (email === 'john.doe@email.fr' && password === '1234') {
        document.cookie = "refreshToken=" + 'clientRefreshToken' + new Date().getDate();
        return new CustomResponse(true, {
            accessToken: 'clientAccessToken',
            role: 'USER'
        })
    } else {
        return new CustomResponse(false, undefined, "L'adresse email ou le mot de passe est incorrect.")
    }
}

function logOut(): void {
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("Déconnexion...");
}

function signIn(payload: { email: string, password: string }): CustomResponse {
    const { email, password } = payload;
    if (email !== 'admin@quai-antique.fr' && email !== 'john.doe@email.fr') {
        return new CustomResponse(true)
    } else return new CustomResponse(false, undefined, "L'adresse email est déjà utilisée.")
}

function signOut(): void {
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("Suppression du compte...");
}

function refreshToken(payload: { token: string }): CustomResponse {
    const { token } = payload;
    if (token === 'adminRefreshToken' + new Date().getDate()) {
        return new CustomResponse(true, { accessToken: 'adminAccessToken', role: 'ADMIN' });
    } else if (token === 'clientRefreshToken' + new Date().getDate()) {
        return new CustomResponse(true, { accessToken: 'clientAccessToken', role: 'USER' });
    } else return new CustomResponse(false, undefined, "La session a expiré.");
}

export default {
    logIn: (callback: Function, payload: { email: string, password: string }) => withDelayRequest(logIn, callback, payload),
    logOut: (callback: Function) => withDelayRequest(logOut, callback),
    signIn: (callback: Function, payload: { email: string, password: string }) => withDelayRequest(signIn, callback, payload),
    signOut: (callback: Function) => withDelayRequest(signOut, callback),
    refreshToken: (callback: Function, payload: { token: string }) => withDelayRequest(refreshToken, callback, payload),
} 
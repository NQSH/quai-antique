import type { NewUser } from "@/composables/useUser";
import CustomResponse from "./classes/CustomResponse";
import { withDelayRequest } from "./_withDelayRequest";

function get(accessToken: string): CustomResponse {
    if (accessToken === 'adminAccessToken') {
        return new CustomResponse(true, {
            name: "arnaud",
            surname: "michant",
            address: '123 avenue de cros',
            zip: '12345',
            city: 'Boucheville',
            email: 'admin@quai-antique.fr'
        })
    } else if (accessToken === 'clientAccessToken') {
        return new CustomResponse(true, {
            name: "john",
            surname: "doe",
            address: '123 rue des Ruelles',
            zip: '01234',
            city: 'Ville-du-pays',
            email: 'john.doe@email.fr',
            additional: {
                numberOfPerson: 3,
                hasAllergy: true,
                allergies: 'fruits de mer'
            }
        })
    } else return new CustomResponse(false, undefined, 'Une erreur est survenue.')
}

function post(payload: NewUser): CustomResponse {
    if (payload.email === 'admin@quai-antique.fr' || payload.email === 'john.doe@email.fr') {
        return new CustomResponse(false, undefined, 'L\'adresse email est déjà utilisée.');
    } else {
        return new CustomResponse(true);
    }
}

export default {
    get,
    post: (callback: Function, payload: NewUser) => withDelayRequest(post, callback, payload)
}
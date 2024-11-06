import CustomResponse from "./classes/CustomResponse";

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
                allergy: true,
                allergies: 'fruits de mer'
            }
        })
    } else return new CustomResponse(false, undefined, 'Une erreur est survenue.')
}

export default {
    get,
}
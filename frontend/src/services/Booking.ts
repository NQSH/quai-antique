import type { Booking } from "@/composables/useBooking";
import CustomResponse from "./classes/CustomResponse";
import { withDelayRequest } from "./_withDelayRequest";

function get(accessToken: string): CustomResponse {
    if (accessToken === 'clientAccessToken') {
        return new CustomResponse(true, [
            {
                id: 1,
                name: 'john',
                surname: 'doe',
                date: '2024-11-13',
                service: 'diner',
                time: '19:15',
                numberOfPerson: 3,
                hasAllergy: true,
                allergies: 'Fruits de mer'
            }
        ])
    } else {
        return new CustomResponse(true, [])
    }
}

function post(payload: Booking): CustomResponse {
    const { numberOfPerson } = payload;
    if (numberOfPerson > 10) return new CustomResponse(false, undefined, 'Le nombre de personne dépasse notre capacité pour ce service.')
    return new CustomResponse(true, { ...payload, id: Math.floor(Math.random() * 100) });
}

function put(payload: Booking): CustomResponse {
    return new CustomResponse(true, payload);
}

export default {
    get,
    post: (callback: Function, payload: Booking) => withDelayRequest(post, callback, payload),
    put: (callback: Function, payload: Booking) => withDelayRequest(put, callback, payload),
}
import type { Booking } from "@/composables/useBooking";
import CustomResponse from "./classes/CustomResponse";
import { withDelayRequest } from "./_withDelayRequest";

function get(accessToken: string): CustomResponse {
    if (accessToken === 'clientAccesToken') {
        return new CustomResponse(true, [
            {
                date: '2024-11-06',
                time: '19:15',
                numberOfPerson: 3,
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
    return new CustomResponse(true)
}

export default {
    get,
    post: (callback: Function, payload: Booking) => withDelayRequest(post, callback, payload),
}
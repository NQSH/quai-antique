import type { Booking } from "@/composables/useBooking";
import CustomResponse from "./classes/CustomResponse";
import { withDelayRequest } from "./_withDelayRequest";

function get(accessToken: string): CustomResponse {
    const bookings = [
        {
            accessToken: 'clientAccessToken',
            id: 1,
            name: 'john',
            surname: 'doe',
            date: '2025-11-13',
            service: 'diner',
            time: '19:15',
            numberOfPerson: 3,
            hasAllergy: true,
            allergies: 'Fruits de mer'
        },
        {
            accessToken: 'otherAccessToken',
            id: 2,
            name: 'david',
            surname: 'goal',
            date: '2025-08-12',
            service: 'lunch',
            time: '13:00',
            numberOfPerson: 3,
            hasAllergy: false,
            allergies: 'Fruits de mer'
        },
        {
            accessToken: 'otherAccessToken',
            id: 3,
            name: 'franck',
            surname: 'dane',
            date: '2025-02-12',
            service: 'diner',
            time: '20:15',
            numberOfPerson: 2,
            hasAllergy: true,
            allergies: 'Lactose'
        },
        {
            accessToken: 'otherAccessToken',
            id: 4,
            name: 'elisa',
            surname: 'corn',
            date: '2025-04-07',
            service: 'lunch',
            time: '12:15',
            numberOfPerson: 3,
            hasAllergy: false,
            allergies: 'Fruits de mer'
        },
    ]
    if (accessToken === 'clientAccessToken') {
        return new CustomResponse(true, bookings.filter(booking => booking.accessToken === accessToken))
    } else {
        return new CustomResponse(true, bookings)
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
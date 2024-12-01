import { Helpers } from "./_helpers";

function getNextAvailableDate(): Date {
    const nextDate = new Date();

    if (nextDate.getDay() === 0) {
        nextDate.setDate(nextDate.getDate() + 2);
    } else {
        nextDate.setDate(nextDate.getDate() + 1);
    }

    return nextDate;
}

/** Return an array of service available times */
function getServiceTimes(date: string, from: string, duration: number): string[] {
    const serviceTimes: string[] = [];

    const fromTime = from.split(':');
    const fromHours = Number(fromTime[0]);
    const fromMinutes = Number(fromTime[1]);

    const currentTime = new Date().getTime();
    const askedDate = new Date(date);

    for (let i = fromHours; i <= fromHours + duration; i++) {
        for (let j = fromMinutes; j < 60; j += 15) {
            askedDate.setHours(i);
            askedDate.setMinutes(j);

            const askedTime = askedDate.getTime();

            if (askedTime >= currentTime) {
                serviceTimes.push(`${('0' + i).slice(-2)}:${('0' + j).slice(-2)}`);
            }

            if (i === fromHours + duration && j === fromMinutes) break;
        }
    }

    return serviceTimes;
}

type InitialBookingOptions = {
    minDate: string
    service: {
        name: string
        times: string[]
    }
}

type EstablishmentInfo = {
    servicesTime: {
        'lunch': string
        'diner': string
    },
    serviceDuration: number,
    capacity: number,
}

function isTodayToLate(lastService: string, duration: number): boolean {
    const lastServiceTime = lastService.split(':');
    const lastServiceHours = Number(lastServiceTime[0]);
    const lastServiceMinutes = Number(lastServiceTime[1]);

    const lastServiceDate = new Date();
    lastServiceDate.setHours(lastServiceHours + duration);
    lastServiceDate.setMinutes(lastServiceMinutes);

    return lastServiceDate.getTime() < new Date().getTime();
}

function getInitialBookingOptions(establishmentInfo: EstablishmentInfo): InitialBookingOptions {

    const minDate = Helpers.FormatTool.Date.toFullYearMonthDay(!isTodayToLate(establishmentInfo.servicesTime.diner, establishmentInfo.serviceDuration) ? new Date() : getNextAvailableDate());
    const lunch = getServiceTimes(minDate, establishmentInfo.servicesTime.lunch, establishmentInfo.serviceDuration);
    const diner = getServiceTimes(minDate, establishmentInfo.servicesTime.diner, establishmentInfo.serviceDuration);

    if (lunch.length > 0) {
        return {
            minDate,
            service: {
                name: 'lunch',
                times: lunch
            }
        }
    } else {
        return {
            minDate,
            service: {
                name: 'diner',
                times: diner,
            }
        }
    }
}

export const Booking = {
    getInitialBookingOptions,
    getServiceTimes,
}
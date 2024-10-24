function isToday(date: string): boolean {
    return new Date(date).toDateString() === new Date().toDateString();
}

function isToLate(time: string): boolean {

    return true
}

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

export const Datetime = {
    isToday,
    isToLate,
    getServiceTimes,
}
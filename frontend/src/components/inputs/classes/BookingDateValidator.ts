import { InputValidator } from "./_inputValidator";

export class BookingDateValidator extends InputValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    return new Date(value).getDay() !== 1;
                },
                error: 'Nous sommes malheureusement fermés les lundis'
            },
            {
                validate: (value: string) => {
                    return new Date(value) > new Date || new Date(value).toDateString() === new Date().toDateString();
                },
                error: 'Ne peut être inférieur à la date du jour'
            },
            {
                validate: (value: string) => {
                    return new Date(value).valueOf() < new Date(new Date().setFullYear(new Date().getFullYear() + 1)).valueOf();
                },
                error: 'Ne peut être supérieur à un an'
            }
        ])
    }
}
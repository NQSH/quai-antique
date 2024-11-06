import { InputValidator } from "./_inputValidator";

export class NotEmptyValidator extends InputValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    return value !== '' && value !== null && value !== undefined;
                },
                error: 'Ne peut être vide'
            },
        ])
    }
}
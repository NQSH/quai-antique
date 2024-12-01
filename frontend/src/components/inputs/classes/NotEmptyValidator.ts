import { InputValidator, type Validator } from "./_inputValidator";

export class NotEmptyValidator extends InputValidator {
    constructor(validators?: Validator[]) {
        super([
            {
                validate: (value: string) => {
                    return value !== '' && value !== null && value !== undefined;
                },
                error: 'Ne peut être vide'
            },
        ].concat(validators ?? []))
    }
}
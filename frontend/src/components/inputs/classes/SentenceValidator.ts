import { InputValidator } from "./_inputValidator";

export class SentenceValidator extends InputValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/);
                    return regex.test(value);
                },
                error: 'Les caractères spéciaux ne sont pas autorisés'
            },
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^.{0,100}$/);
                    return regex.test(value)
                },
                error: 'Doit comporter au maximum 100 caractères'
            }
        ])
    }
}
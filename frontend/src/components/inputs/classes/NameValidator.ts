import { InputValidator } from "./_inputValidator";

export class NameValidator extends InputValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/);
                    return regex.test(value);
                },
                error: 'Les caractères spéciaux ne sont pas autorisés'
            },
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^.{2,50}$/);
                    return regex.test(value)
                },
                error: 'Doit comporter entre 2 et 50 caractères'
            }
        ])
    }
}
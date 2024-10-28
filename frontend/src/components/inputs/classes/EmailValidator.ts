import { InputValidator } from "./_inputValidator";

export class EmailValidator extends InputValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
                    return regex.test(value);
                },
                error: 'L\'adresse email n\'est pas valide'
            }
        ])
    }
}
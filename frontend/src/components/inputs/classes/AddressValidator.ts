import { NotEmptyValidator } from "./NotEmptyValidator";

export class AddressValidator extends NotEmptyValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^(\d{1,5})\s+([\w\s'-]+)$/);
                    return regex.test(value);
                },
                error: 'L\'adresse n\'est pas valide'
            },
        ])
    }
}
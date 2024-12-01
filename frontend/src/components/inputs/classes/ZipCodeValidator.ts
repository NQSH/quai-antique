import { NotEmptyValidator } from "./NotEmptyValidator";

export class ZipCodeValidator extends NotEmptyValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^\d{5}$/);
                    return regex.test(value);
                },
                error: 'Le code postal n\'est pas valide'
            },
        ])
    }
}
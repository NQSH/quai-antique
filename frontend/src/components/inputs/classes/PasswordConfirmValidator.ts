import type { Ref } from "vue";
import { NotEmptyValidator } from "./NotEmptyValidator";

export class PasswordConfirmValidator extends NotEmptyValidator {
    constructor(password: Ref) {
        super([
            {
                validate: (value: string) => {
                    return value === password.value;
                },
                error: 'Doit être identique au mot de passe'
            },
        ])
    }
}
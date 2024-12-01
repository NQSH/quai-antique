import { NotEmptyValidator } from "./NotEmptyValidator";

export class PasswordValidator extends NotEmptyValidator {
    constructor() {
        super([
            {
                validate: (value: string) => {
                    const regex = new RegExp(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/);
                    return regex.test(value);
                },
                error: 'Doit contenir au minimun 8 caractères dont un spécial'
            },
        ])
    }
}
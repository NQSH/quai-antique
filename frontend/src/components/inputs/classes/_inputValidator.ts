export interface Validator {
    validate(value: any): boolean
    error: string
}

export class InputValidator {
    private _errors: string[] = []

    constructor(
        private _validators: Validator[]
    ) { }

    public isValid(value: any): boolean {
        this._errors = [];
        this._validators.forEach(validator => {
            if (!validator.validate(value)) this._errors.push(validator.error);
        })

        return this._errors.length === 0;
    }

    get errors(): string[] {
        return this._errors;
    }
}
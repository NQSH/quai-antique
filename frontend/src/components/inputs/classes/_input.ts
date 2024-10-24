import type { InputValidator } from "./_inputValidator";

export class Input {
    constructor(
        private _name: string,
        private _label: string,
        private _value: any,
        private _validator?: InputValidator,
    ) { }

    get name(): string {
        return this._name;
    }

    get label(): string {
        return this._label;
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
    }

    get validator(): InputValidator | undefined {
        return this._validator;
    }
}
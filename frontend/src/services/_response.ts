export default class CustomResponse {
    constructor(
        private _statusOK: boolean,
        private _data?: object,
        private _message?: string,

    ) { }

    get statusOK(): boolean {
        return this._statusOK;
    }

    get data(): Object | undefined {
        return this._data;
    }

    get message(): string | undefined {
        return this._message;
    }
}
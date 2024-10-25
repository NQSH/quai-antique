export function withDelayRequest(request: Function, callback: Function, payload?: Object): void {
    console.log('Delayed request ...');

    const response = request(payload);
    setTimeout(() => callback(response), 3000);
}
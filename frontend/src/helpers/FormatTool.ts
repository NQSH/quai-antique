function toSentenceCase(text: string = ''): string {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
}

const Text = {
    toSentenceCase,
}

function toFullYearMonthDay(date: Date): string {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
}

const Date = {
    toFullYearMonthDay
}

function phoneNumberFR(phoneNumber: string): string {
    return phoneNumber
        .replace(/^(\+33)/, "0")
        .replace(/(\d{2})(?=\d)/g, "$1 ")
        .trim();
}

const PhoneNumber = {
    phoneNumberFR,
}

export const FormatTool = {
    Text,
    Date,
    PhoneNumber,
}
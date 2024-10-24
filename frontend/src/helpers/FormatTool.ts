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

export const FormatTool = {
    Text,
    Date
}
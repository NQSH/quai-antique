function toSentenceCase(text: string = ''): string {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
}

const Text = {
    toSentenceCase,
}

export const FormatTool = {
    Text
}
export function decimal(value: number, digits: number = 0) {
    value = value || 0;
    return value.toFixed(digits);
}

export function currency(
    value: number | string,
    locales?: string | string[],
    options?: Intl.NumberFormatOptions
): string;
export function currency(
    value: number | string,
    locales?: string | string[],
    currency?: string,
    digits?: number
): string;
export function currency(
    value: number | string,
    locales: string | string[] = 'english',
    currency: string | Intl.NumberFormatOptions = 'USD',
    digits?: number
): string {
    switch (typeof value) {
        case 'string':
            value = parseFloat(value) || 0;
            break;
        case 'number':
            value = value || 0;
            break;
        default:
            value = 0;
            break;
    }
    switch (typeof currency) {
        case 'string':
            return value.toLocaleString(locales, {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: digits
            });
        case 'object':
            let options = Object.assign({}, {
                style: 'currency',
                minimumFractionDigits: digits
            }, currency);
            return value.toLocaleString(locales, options);
        default:
            return '' + value;
    }
}

export function date(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? value : new Date(value);
    return date.toLocaleDateString(locales, options);
}

export function time(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? new Date(value.toString()) : new Date(value);
    return date.toLocaleTimeString(locales, options);
}
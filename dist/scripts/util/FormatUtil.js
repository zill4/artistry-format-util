Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.date = exports.currency = exports.decimal = void 0;
function decimal(value, digits = 0) {
    value = value || 0;
    return value.toFixed(digits);
}
exports.decimal = decimal;
function currency(value, locales = 'english', currency = 'USD', digits) {
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
exports.currency = currency;
function date(value, locales, options) {
    let date = (value instanceof Date) ? value : new Date(value);
    return date.toLocaleDateString(locales, options);
}
exports.date = date;
function time(value, locales, options) {
    let date = (value instanceof Date) ? new Date(value.toString()) : new Date(value);
    return date.toLocaleTimeString(locales, options);
}
exports.time = time;
//# sourceMappingURL=FormatUtil.js.map
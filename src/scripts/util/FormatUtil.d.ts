export declare function decimal(value: number, digits?: number): string;
export declare function currency(value: number | string, locales?: string | string[], options?: Intl.NumberFormatOptions): string;
export declare function currency(value: number | string, locales?: string | string[], currency?: string, digits?: number): string;
export declare function date(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
export declare function time(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;

/**
 * charMap
 * @type {Object}
 */
export declare const charMap: {
    [key: string]: string;
};
/**
     * special look ahead character array
     * These characters form with consonants to become 'single'/consonant combo
     * @type [Array]
     */
export declare const lookAheadCharArray: string[];
/**
 * diatricMap for languages where transliteration changes entirely as more diatrics are added
 * @type {Object}
 */
export declare const diatricMap: {
    'ာ': string;
    'ါ': string;
    'ေ': string;
    'ဲ': string;
    'ိ': string;
    'ီ': string;
    'ို': string;
    'ု': string;
    'ူ': string;
    'ေါင်': string;
    'ော': string;
    'ော်': string;
    'ေါ': string;
    'ေါ်': string;
    '်': string;
    'က်': string;
    'ိုက်': string;
    'ောက်': string;
    'င်': string;
    'ိုင်': string;
    'ောင်': string;
    'စ်': string;
    'ည်': string;
    'တ်': string;
    'ိတ်': string;
    'ုတ်': string;
    'ွတ်': string;
    'ေတ်': string;
    'ဒ်': string;
    'ိုဒ်': string;
    'ုဒ်': string;
    'န်': string;
    'ာန်': string;
    'ိန်': string;
    'ုန်': string;
    'ွန်': string;
    'ပ်': string;
    'ိပ်': string;
    'ုပ်': string;
    'ွပ်': string;
    'န်ုပ်': string;
    'မ်': string;
    'ိမ်': string;
    'ုမ်': string;
    'ွမ်': string;
    'ယ်': string;
    'ိုလ်': string;
    'ဉ်': string;
    'ံ': string;
    'ိံ': string;
    'ုံ': string;
    'ައް': string;
    'ަށް': string;
};
/**
 * langCharMap language specific characters translations
 * @type   {Object}
 */
export declare const langCharMap: {
    'en': {};
    'az': {
        'ç': string;
        'ə': string;
        'ğ': string;
        'ı': string;
        'ö': string;
        'ş': string;
        'ü': string;
        'Ç': string;
        'Ə': string;
        'Ğ': string;
        'İ': string;
        'Ö': string;
        'Ş': string;
        'Ü': string;
    };
    'cs': {
        'č': string;
        'ď': string;
        'ě': string;
        'ň': string;
        'ř': string;
        'š': string;
        'ť': string;
        'ů': string;
        'ž': string;
        'Č': string;
        'Ď': string;
        'Ě': string;
        'Ň': string;
        'Ř': string;
        'Š': string;
        'Ť': string;
        'Ů': string;
        'Ž': string;
    };
    'fi': {
        'ä': string;
        'Ä': string;
        'ö': string;
        'Ö': string;
    };
    'hu': {
        'ä': string;
        'Ä': string;
        'ö': string;
        'Ö': string;
        'ü': string;
        'Ü': string;
        'ű': string;
        'Ű': string;
    };
    'lt': {
        'ą': string;
        'č': string;
        'ę': string;
        'ė': string;
        'į': string;
        'š': string;
        'ų': string;
        'ū': string;
        'ž': string;
        'Ą': string;
        'Č': string;
        'Ę': string;
        'Ė': string;
        'Į': string;
        'Š': string;
        'Ų': string;
        'Ū': string;
    };
    'lv': {
        'ā': string;
        'č': string;
        'ē': string;
        'ģ': string;
        'ī': string;
        'ķ': string;
        'ļ': string;
        'ņ': string;
        'š': string;
        'ū': string;
        'ž': string;
        'Ā': string;
        'Č': string;
        'Ē': string;
        'Ģ': string;
        'Ī': string;
        'Ķ': string;
        'Ļ': string;
        'Ņ': string;
        'Š': string;
        'Ū': string;
        'Ž': string;
    };
    'pl': {
        'ą': string;
        'ć': string;
        'ę': string;
        'ł': string;
        'ń': string;
        'ó': string;
        'ś': string;
        'ź': string;
        'ż': string;
        'Ą': string;
        'Ć': string;
        'Ę': string;
        'Ł': string;
        'Ń': string;
        'Ó': string;
        'Ś': string;
        'Ź': string;
        'Ż': string;
    };
    'sv': {
        'ä': string;
        'Ä': string;
        'ö': string;
        'Ö': string;
    };
    'sk': {
        'ä': string;
        'Ä': string;
    };
    'sr': {
        'љ': string;
        'њ': string;
        'Љ': string;
        'Њ': string;
        'đ': string;
        'Đ': string;
    };
    'tr': {
        'Ü': string;
        'Ö': string;
        'ü': string;
        'ö': string;
    };
};
/**
 * symbolMap language specific symbol translations
 * translations must be transliterated already
 * @type   {Object}
 */
export declare const symbolMap: {
    'ar': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'az': {};
    'ca': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'cs': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'de': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'dv': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'en': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'es': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'fa': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'fi': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'fr': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'ge': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'gr': {};
    'hu': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'it': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'lt': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'lv': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'my': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'mk': {};
    'nl': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'pl': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'pt': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'ro': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'ru': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'sk': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'sr': {};
    'tr': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'uk': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
    'vn': {
        '∆': string;
        '∞': string;
        '♥': string;
        '&': string;
        '|': string;
        '<': string;
        '>': string;
        '∑': string;
        '¤': string;
    };
};
export declare const uricChars: string;
export declare const uricNoSlashChars: string;
export declare const markChars: string;

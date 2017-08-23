declare module "utils/charmap" {
    /**
     * charMap
     * @type {Object}
     */
    export const charMap: {
        [key: string]: string;
    };
    /**
         * special look ahead character array
         * These characters form with consonants to become 'single'/consonant combo
         * @type [Array]
         */
    export const lookAheadCharArray: string[];
    /**
     * diatricMap for languages where transliteration changes entirely as more diatrics are added
     * @type {Object}
     */
    export const diatricMap: {
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
    export const langCharMap: {
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
    export const symbolMap: {
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
    export const uricChars: string;
    export const uricNoSlashChars: string;
    export const markChars: string;
}
declare module "speakingurl" {
    /**
     * Interface for the SpeakingURL options
     * @see {@link https://github.com/pid/speakingurl#usage}
     */
    export interface speakingurlOptions {
        /**
        * Character that replaces the whitespaces
        *  @default '-'
        */
        separator?: string;
        /**
        * ISO 639-1 Codes for language specific transliteration
        *  @default 'en'
        */
        lang?: string | boolean;
        /**
        * Converts symbols according to the 'lang' setting if true. Don't convert symbols if false
        *  @default true
        */
        symbols?: boolean;
        /**
        * Maintains case chars if true. Convert all chars to lower case if false
        *  @default false
        */
        maintainCase?: boolean;
        /**
        * converts input string to title-case if true. Omit the words from the array if array is given.
        *  @default false
        */
        titleCase?: boolean | string[];
        /**
        * Don't trim length if 0. Trim to max length while not breaking any words if greater or equal to 1.
        *  @default 0
        */
        truncate?: number;
        /**
        *  Allow additional characters if true.
        *  Characters allowed: ";", "?", ":", "@", "&", "=", "+", "\$", ",", "/"
        *  @default false
        */
        uric?: boolean;
        /**
        *  Allow additional characters if true.
        *  Characters allowed: ";", "?", ":", "@", "&", "=", "+", "\$", ","
        *  @default false
        */
        uricNoSlash?: boolean;
        /**
        *  Allow additional characters if true.
        *  Characters allowed: "-", "_", ".", "!", "~", "*", "'", "(", ")"
        *  @default false
        */
        mark?: boolean;
        /**
        *  custom map for translation if object provided. Add array chars to allowed charMap if array provided.
        *  @default {}
        */
        custom?: {
            [key: string]: string;
        } | string[];
    }
    /**
        * getSlug
        * @param  {string} input input string
        * @param  {object|string} opts config object or separator string/char
        * @api    public
        * @return {string}  sluggified string
        */
    export const getSlug: (input: string, opts: string | speakingurlOptions) => string;
    /**
      * createSlug curried(opts)(input)
      * @param   {object|string} opts config object or input string
      * @return  {Function} function getSlugWithConfig()
      **/
    export const createSlug: (opts: string | {}) => (input: string) => string;
    /**
     * escape Chars
     * @param   {string} input string
     */
    export const escapeChars: (input: string) => string;
    /**
     * check if the char is an already converted char from custom list
     * @param   {char} ch character to check
     * @param   {object} customReplacements custom translation map
     */
    export const isReplacedCustomChar: (ch: string, customReplacements: {}) => boolean;
}

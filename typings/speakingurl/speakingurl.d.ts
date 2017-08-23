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
export declare const getSlug: (input: string, opts: string | speakingurlOptions) => string;
/**
  * createSlug curried(opts)(input)
  * @param   {object|string} opts config object or input string
  * @return  {Function} function getSlugWithConfig()
  **/
export declare const createSlug: (opts: string | {}) => (input: string) => string;
/**
 * escape Chars
 * @param   {string} input string
 */
export declare const escapeChars: (input: string) => string;
/**
 * check if the char is an already converted char from custom list
 * @param   {char} ch character to check
 * @param   {object} customReplacements custom translation map
 */
export declare const isReplacedCustomChar: (ch: string, customReplacements: {}) => boolean;
export declare var define: any;

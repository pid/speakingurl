import * as charMapper from './utils/charmap';
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
  custom?: { [key: string]: string } | string[]

}
/**
    * getSlug
    * @param  {string} input input string
    * @param  {object|string} opts config object or separator string/char
    * @api    public
    * @return {string}  sluggified string
    */
export const getSlug = (input: string, opts: speakingurlOptions | string): string => {
  let separator = '-';
  let result = '';
  let diatricString = '';
  let convertSymbols = true;
  let customReplacements = {};
  let maintainCase;
  let titleCase;
  let truncate;
  let uricFlag;
  let uricNoSlashFlag;
  let markFlag;
  let symbol;
  let langChar;
  let lucky;
  let i;
  let ch;
  let l;
  let lastCharWasSymbol;
  let lastCharWasDiatric;
  let allowedChars = '';

  if (typeof input !== 'string') {
    return '';
  }

  if (typeof opts === 'string') {
    separator = <string>opts;
  }

  symbol = charMapper.symbolMap.en;
  langChar = charMapper.langCharMap.en;

  if (typeof opts === 'object') {
    opts = <speakingurlOptions>opts;
    maintainCase = opts.maintainCase || false;
    customReplacements = (opts.custom && typeof opts.custom === 'object') ? opts.custom : customReplacements;
    truncate = (+opts.truncate > 1 && opts.truncate) || false;
    uricFlag = opts.uric || false;
    uricNoSlashFlag = opts.uricNoSlash || false;
    markFlag = opts.mark || false;
    convertSymbols = (opts.symbols === false || opts.lang === false) ? false : true;
    separator = opts.separator || separator;

    if (uricFlag) {
      allowedChars += charMapper.uricChars;
    }

    if (uricNoSlashFlag) {
      allowedChars += charMapper.uricNoSlashChars;
    }

    if (markFlag) {
      allowedChars += charMapper.markChars;
    }

    symbol = (opts.lang && charMapper.symbolMap[<string>opts.lang] && convertSymbols) ?
      charMapper.symbolMap[<string>opts.lang] : (convertSymbols ? charMapper.symbolMap.en : {});

    langChar = (opts.lang && charMapper.langCharMap[<string>opts.lang]) ?
      charMapper.langCharMap[<string>opts.lang] :
      opts.lang === false || opts.lang === true ? {} : charMapper.langCharMap.en;

    // if titleCase config is an Array, rewrite to object format
    if (opts.titleCase && Array.isArray(opts.titleCase) && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
      opts.titleCase = <string[]>opts.titleCase;
      opts.titleCase.forEach(function (v) {
        customReplacements[v + ''] = v + '';
      });

      titleCase = true;
    } else {
      titleCase = !!opts.titleCase;
    }

    // if custom config is an Array, rewrite to object format
    if (opts.custom && Array.isArray(opts.custom) && typeof opts.custom.length === 'number' && Array.prototype.toString.call(opts.custom)) {
      opts.custom = <string[]>opts.custom;
      opts.custom.forEach(function (v) {
        customReplacements[v + ''] = v + '';
      });
    }

    // custom replacements
    Object.keys(customReplacements).forEach(function (v) {
      let r;

      if (v.length > 1) {
        r = new RegExp('\\b' + escapeChars(v) + '\\b', 'gi');
      } else {
        r = new RegExp(escapeChars(v), 'gi');
      }

      input = input.replace(r, customReplacements[v]);
    });

    // add all custom replacement to allowed charlist
    for (ch in customReplacements) {
      allowedChars += ch;
    }
  }

  allowedChars += separator;

  // escape all necessary chars
  allowedChars = escapeChars(allowedChars);

  // trim whitespaces
  input = input.replace(/(^\s+|\s+$)/g, '');

  lastCharWasSymbol = false;
  lastCharWasDiatric = false;

  for (i = 0, l = input.length; i < l; i++) {
    ch = input[i];

    if (isReplacedCustomChar(ch, customReplacements)) {
      // don't convert a already converted char
      lastCharWasSymbol = false;
    } else if (langChar[ch]) {
      // process language specific diactrics chars conversion
      ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? ' ' + langChar[ch] : langChar[ch];

      lastCharWasSymbol = false;
    } else if (ch in charMapper.charMap) {
      // the transliteration changes entirely when some special characters are added
      if (i + 1 < l && charMapper.lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
        diatricString += ch;
        ch = '';
      } else if (lastCharWasDiatric === true) {
        ch = charMapper.diatricMap[diatricString] + charMapper.charMap[ch];
        diatricString = '';
      } else {
        // process diactrics chars
        ch = lastCharWasSymbol && charMapper.charMap[ch].match(/[A-Za-z0-9]/) ? ' ' + charMapper.charMap[ch] : charMapper.charMap[ch];
      }

      lastCharWasSymbol = false;
      lastCharWasDiatric = false;
    } else if (ch in charMapper.diatricMap) {
      diatricString += ch;
      ch = '';
      // end of string, put the whole meaningful word
      if (i === l - 1) {
        ch = charMapper.diatricMap[diatricString];
      }
      lastCharWasDiatric = true;
    } else if (
      // process symbol chars
      symbol[ch] && !(uricFlag && charMapper.uricChars
        .indexOf(ch) !== -1) && !(uricNoSlashFlag && charMapper.uricNoSlashChars
          // .indexOf(ch) !== -1) && !(markFlag && charMapper.markChars
          .indexOf(ch) !== -1)) {
      ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
      ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : '';

      lastCharWasSymbol = true;
    } else {
      if (lastCharWasDiatric === true) {
        ch = charMapper.diatricMap[diatricString] + ch;
        diatricString = '';
        lastCharWasDiatric = false;
      } else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
        // process latin chars
        ch = ' ' + ch;
      }
      lastCharWasSymbol = false;
    }

    // add allowed chars
    result += ch.replace(new RegExp('[^\\w\\s' + allowedChars + '_-]', 'g'), separator);
  }

  if (titleCase) {
    result = result.replace(/(\w)(\S*)/g, function (_, i, r) {
      let j = i.toUpperCase() + (r !== null ? r : '');
      return (Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0) ? j : j.toLowerCase();
    });
  }

  // eliminate duplicate separators
  // add separator
  // trim separators from start and end
  result = result.replace(/\s+/g, separator)
    .replace(new RegExp('\\' + separator + '+', 'g'), separator)
    .replace(new RegExp('(^\\' + separator + '+|\\' + separator + '+$)', 'g'), '');

  if (truncate && result.length > truncate) {
    lucky = result.charAt(truncate) === separator;
    result = result.slice(0, truncate);

    if (!lucky) {
      result = result.slice(0, result.lastIndexOf(separator));
    }
  }

  if (!maintainCase && !titleCase) {
    result = result.toLowerCase();
  }

  return result;
};

/**
  * createSlug curried(opts)(input)
  * @param   {object|string} opts config object or input string
  * @return  {Function} function getSlugWithConfig()
  **/
export const createSlug = (opts: {} | string) => {
  /**
   * getSlugWithConfig
   * @param   {string} input string
   * @return  {string} slug string
   */
  return function getSlugWithConfig(input: string): string {
    return getSlug(input, opts);
  };
};

/**
 * escape Chars
 * @param   {string} input string
 */
export const escapeChars = (input: string): string => {
  return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
};

/**
 * check if the char is an already converted char from custom list
 * @param   {char} ch character to check
 * @param   {object} customReplacements custom translation map
 */
export const isReplacedCustomChar = (ch: string, customReplacements: {}) => {
  for (let c in customReplacements) {
    if (customReplacements[c] === ch) {
      return true;
    }
  }
};

/* modules, require and stuff like that */
export declare var define: any;
declare var module: any;
declare var window: any;
(function () {

  let exportables = [createSlug, getSlug, isReplacedCustomChar, escapeChars];

  // Node: Export function
  if (typeof module !== "undefined" && module.exports) {
    exportables.forEach(exp => {
      return module.exports[nameof(exp)] = exp;
    });
  }
  // AMD/requirejs: Define the module
  else if (typeof define === 'function' && define.amd) {
    exportables.forEach(exp => {
      return define(() => exp);
    });
  }
  //expose it through Window
  else if (window) {
    exportables.forEach((exp) => {
      return (window as any)[nameof(exp)] = exp;
    });
  }

  function nameof(fn: any): string {
    return typeof fn === 'undefined' ? '' : fn.name ? fn.name : (() => {
      let result = /^function\s+([\w\$]+)\s*\(/.exec(fn.toString());
      return !result ? '' : result[1];
    })();
  }

}());
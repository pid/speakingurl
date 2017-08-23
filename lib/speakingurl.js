"use strict";
const charmap_1 = require('./utils/charmap');
const charmap_2 = require('./utils/charmap');
const charmap_3 = require('./utils/charmap');
const charmap_4 = require('./utils/charmap');
const charmap_5 = require('./utils/charmap');
const charmap_6 = require('./utils/charmap');
const charmap_7 = require('./utils/charmap');
const charmap_8 = require('./utils/charmap');
/**
    * getSlug
    * @param  {string} input input string
    * @param  {object|string} opts config object or separator string/char
    * @api    public
    * @return {string}  sluggified string
    */
exports.getSlug = (input, opts) => {
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
        separator = opts;
    }
    symbol = charmap_8.symbolMap.en;
    langChar = charmap_7.langCharMap.en;
    if (typeof opts === 'object') {
        opts = opts;
        maintainCase = opts.maintainCase || false;
        customReplacements = (opts.custom && typeof opts.custom === 'object') ? opts.custom : customReplacements;
        truncate = (+opts.truncate > 1 && opts.truncate) || false;
        uricFlag = opts.uric || false;
        uricNoSlashFlag = opts.uricNoSlash || false;
        markFlag = opts.mark || false;
        convertSymbols = (opts.symbols === false || opts.lang === false) ? false : true;
        separator = opts.separator || separator;
        if (uricFlag) {
            allowedChars += charmap_6.uricChars;
        }
        if (uricNoSlashFlag) {
            allowedChars += charmap_5.uricNoSlashChars;
        }
        if (markFlag) {
            allowedChars += charmap_4.markChars;
        }
        symbol = (opts.lang && charmap_8.symbolMap[opts.lang] && convertSymbols) ?
            charmap_8.symbolMap[opts.lang] : (convertSymbols ? charmap_8.symbolMap.en : {});
        langChar = (opts.lang && charmap_7.langCharMap[opts.lang]) ?
            charmap_7.langCharMap[opts.lang] :
            opts.lang === false || opts.lang === true ? {} : charmap_7.langCharMap.en;
        // if titleCase config is an Array, rewrite to object format
        if (opts.titleCase && Array.isArray(opts.titleCase) && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
            opts.titleCase = opts.titleCase;
            opts.titleCase.forEach(function (v) {
                customReplacements[v + ''] = v + '';
            });
            titleCase = true;
        }
        else {
            titleCase = !!opts.titleCase;
        }
        // if custom config is an Array, rewrite to object format
        if (opts.custom && Array.isArray(opts.custom) && typeof opts.custom.length === 'number' && Array.prototype.toString.call(opts.custom)) {
            opts.custom = opts.custom;
            opts.custom.forEach(function (v) {
                customReplacements[v + ''] = v + '';
            });
        }
        // custom replacements
        Object.keys(customReplacements).forEach(function (v) {
            let r;
            if (v.length > 1) {
                r = new RegExp('\\b' + exports.escapeChars(v) + '\\b', 'gi');
            }
            else {
                r = new RegExp(exports.escapeChars(v), 'gi');
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
    allowedChars = exports.escapeChars(allowedChars);
    // trim whitespaces
    input = input.replace(/(^\s+|\s+$)/g, '');
    lastCharWasSymbol = false;
    lastCharWasDiatric = false;
    for (i = 0, l = input.length; i < l; i++) {
        ch = input[i];
        if (exports.isReplacedCustomChar(ch, customReplacements)) {
            // don't convert a already converted char
            lastCharWasSymbol = false;
        }
        else if (langChar[ch]) {
            // process language specific diactrics chars conversion
            ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? ' ' + langChar[ch] : langChar[ch];
            lastCharWasSymbol = false;
        }
        else if (ch in charmap_3.charMap) {
            // the transliteration changes entirely when some special characters are added
            if (i + 1 < l && charmap_2.lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
                diatricString += ch;
                ch = '';
            }
            else if (lastCharWasDiatric === true) {
                ch = charmap_1.diatricMap[diatricString] + charmap_3.charMap[ch];
                diatricString = '';
            }
            else {
                // process diactrics chars
                ch = lastCharWasSymbol && charmap_3.charMap[ch].match(/[A-Za-z0-9]/) ? ' ' + charmap_3.charMap[ch] : charmap_3.charMap[ch];
            }
            lastCharWasSymbol = false;
            lastCharWasDiatric = false;
        }
        else if (ch in charmap_1.diatricMap) {
            diatricString += ch;
            ch = '';
            // end of string, put the whole meaningful word
            if (i === l - 1) {
                ch = charmap_1.diatricMap[diatricString];
            }
            lastCharWasDiatric = true;
        }
        else if (
        // process symbol chars
        symbol[ch] && !(uricFlag && charmap_6.uricChars
            .indexOf(ch) !== -1) && !(uricNoSlashFlag && charmap_5.uricNoSlashChars
            .indexOf(ch) !== -1)) {
            ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
            ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : '';
            lastCharWasSymbol = true;
        }
        else {
            if (lastCharWasDiatric === true) {
                ch = charmap_1.diatricMap[diatricString] + ch;
                diatricString = '';
                lastCharWasDiatric = false;
            }
            else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
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
exports.createSlug = (opts) => {
    /**
     * getSlugWithConfig
     * @param   {string} input string
     * @return  {string} slug string
     */
    return function getSlugWithConfig(input) {
        return exports.getSlug(input, opts);
    };
};
/**
 * escape Chars
 * @param   {string} input string
 */
exports.escapeChars = (input) => {
    return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
};
/**
 * check if the char is an already converted char from custom list
 * @param   {char} ch character to check
 * @param   {object} customReplacements custom translation map
 */
exports.isReplacedCustomChar = (ch, customReplacements) => {
    for (let c in customReplacements) {
        if (customReplacements[c] === ch) {
            return true;
        }
    }
};
(function () {
    let exportables = [exports.createSlug, exports.getSlug, exports.isReplacedCustomChar, exports.escapeChars];
    // Node: Export function
    if (typeof module !== "undefined" && module.exports) {
        exportables.forEach(exp => module.exports[nameof(exp)] = exp);
    }
    else if (typeof define === 'function' && define.amd) {
        exportables.forEach(exp => define(() => exp));
    }
    else if (window) {
        exportables.forEach(exp => window[nameof(exp)] = exp);
    }
    function nameof(fn) {
        return typeof fn === 'undefined' ? '' : fn.name ? fn.name : (() => {
            let result = /^function\s+([\w\$]+)\s*\(/.exec(fn.toString());
            return !result ? '' : result[1];
        })();
    }
}());
//# sourceMappingURL=speakingurl.js.map
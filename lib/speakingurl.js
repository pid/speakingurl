"use strict";
var charMapper = require('./utils/charmap');
/**
 * getSlug
 * @param  {string} input input string
 * @param  {object|string} opts config object or separator string/char
 * @api    public
 * @return {string}  sluggified string
 */
exports.getSlug = function (input, opts) {
    var separator = '-';
    var result = '';
    var diatricString = '';
    var convertSymbols = true;
    var customReplacements = {};
    var maintainCase;
    var titleCase;
    var truncate;
    var uricFlag;
    var uricNoSlashFlag;
    var markFlag;
    var symbol;
    var langChar;
    var lucky;
    var i;
    var ch;
    var l;
    var lastCharWasSymbol;
    var lastCharWasDiatric;
    var allowedChars = '';
    if (typeof input !== 'string') {
        return '';
    }
    if (typeof opts === 'string') {
        separator = opts;
    }
    symbol = charMapper.symbolMap.en;
    langChar = charMapper.langCharMap.en;
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
            allowedChars += charMapper.uricChars;
        }
        if (uricNoSlashFlag) {
            allowedChars += charMapper.uricNoSlashChars;
        }
        if (markFlag) {
            allowedChars += charMapper.markChars;
        }
        symbol = (opts.lang && charMapper.symbolMap[opts.lang] && convertSymbols) ?
            charMapper.symbolMap[opts.lang] : (convertSymbols ? charMapper.symbolMap.en : {});
        langChar = (opts.lang && charMapper.langCharMap[opts.lang]) ?
            charMapper.langCharMap[opts.lang] :
            opts.lang === false || opts.lang === true ? {} : charMapper.langCharMap.en;
        // if titleCase config is an Array, rewrite to object format
        if (opts.titleCase && Array.isArray(opts.titleCase) && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
            opts.titleCase = opts.titleCase;
            opts.titleCase.forEach(function (v) {
                customReplacements[v + ''] = v + '';
            });
            titleCase = true;
        } else {
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
            var r;
            if (v.length > 1) {
                r = new RegExp('\\b' + exports.escapeChars(v) + '\\b', 'gi');
            } else {
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
            var j = i.toUpperCase() + (r !== null ? r : '');
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
exports.createSlug = function (opts) {
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
exports.escapeChars = function (input) {
    return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
};
/**
 * check if the char is an already converted char from custom list
 * @param   {char} ch character to check
 * @param   {object} customReplacements custom translation map
 */
exports.isReplacedCustomChar = function (ch, customReplacements) {
    for (var c in customReplacements) {
        if (customReplacements[c] === ch) {
            return true;
        }
    }
};
(function () {
    var exportables = [exports.createSlug, exports.getSlug, exports.isReplacedCustomChar, exports.escapeChars];
    // Node: Export function
    if (typeof module !== "undefined" && module.exports) {
        exportables.forEach(function (exp) {
            module.exports[nameof(exp)] = exp;
        });
    } else if (typeof exports.define === 'function' && exports.define.amd) {
        exportables.forEach(function (exp) {
            exports.define(function () {
                return exp;
            });
        });
    } else if (window) {
        exportables.forEach(function (exp) {
            window[nameof(exp)] = exp;
        });
    }

    function nameof(fn) {
        return typeof fn === 'undefined' ? '' : fn.name ? fn.name : (function () {
            var result = /^function\s+([\w\$]+)\s*\(/.exec(fn.toString());
            return !result ? '' : result[1];
        })();
    }
}());
//# sourceMappingURL=speakingurl.js.map
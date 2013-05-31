(function () {
  'use strict';

  var charMap = {
    // latin
    'À': 'A',
    'Á': 'A',
    'Â': 'A',
    'Ã': 'A',
    'Ä': 'Ae',
    'Å': 'A',
    'Æ': 'AE',
    'Ç': 'C',
    'È': 'E',
    'É': 'E',
    'Ê': 'E',
    'Ë': 'E',
    'Ì': 'I',
    'Í': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ð': 'D',
    'Ñ': 'N',
    'Ò': 'O',
    'Ó': 'O',
    'Ô': 'O',
    'Õ': 'O',
    'Ö': 'Oe',
    'Ő': 'O',
    'Ø': 'O',
    'Ù': 'U',
    'Ú': 'U',
    'Û': 'U',
    'Ü': 'Ue',
    'Ű': 'U',
    'Ý': 'Y',
    'Þ': 'TH',
    'ß': 'ss',
    'à': 'a',
    'á': 'a',
    'â': 'a',
    'ã': 'a',
    'ä': 'ae',
    'å': 'a',
    'æ': 'ae',
    'ç': 'c',
    'è': 'e',
    'é': 'e',
    'ê': 'e',
    'ë': 'e',
    'ì': 'i',
    'í': 'i',
    'î': 'i',
    'ï': 'i',
    'ð': 'd',
    'ñ': 'n',
    'ò': 'o',
    'ó': 'o',
    'ô': 'o',
    'õ': 'o',
    'ö': 'oe',
    'ő': 'o',
    'ø': 'o',
    'ù': 'u',
    'ú': 'u',
    'û': 'u',
    'ü': 'ue',
    'ű': 'u',
    'ý': 'y',
    'þ': 'th',
    'ÿ': 'y',
    'ẞ': 'SS',
    // greek
    'α': 'a',
    'β': 'b',
    'γ': 'g',
    'δ': 'd',
    'ε': 'e',
    'ζ': 'z',
    'η': 'h',
    'θ': '8',
    'ι': 'i',
    'κ': 'k',
    'λ': 'l',
    'μ': 'm',
    'ν': 'n',
    'ξ': '3',
    'ο': 'o',
    'π': 'p',
    'ρ': 'r',
    'σ': 's',
    'τ': 't',
    'υ': 'y',
    'φ': 'f',
    'χ': 'x',
    'ψ': 'ps',
    'ω': 'w',
    'ά': 'a',
    'έ': 'e',
    'ί': 'i',
    'ό': 'o',
    'ύ': 'y',
    'ή': 'h',
    'ώ': 'w',
    'ς': 's',
    'ϊ': 'i',
    'ΰ': 'y',
    'ϋ': 'y',
    'ΐ': 'i',
    'Α': 'A',
    'Β': 'B',
    'Γ': 'G',
    'Δ': 'D',
    'Ε': 'E',
    'Ζ': 'Z',
    'Η': 'H',
    'Θ': '8',
    'Ι': 'I',
    'Κ': 'K',
    'Λ': 'L',
    'Μ': 'M',
    'Ν': 'N',
    'Ξ': '3',
    'Ο': 'O',
    'Π': 'P',
    'Ρ': 'R',
    'Σ': 'S',
    'Τ': 'T',
    'Υ': 'Y',
    'Φ': 'F',
    'Χ': 'X',
    'Ψ': 'PS',
    'Ω': 'W',
    'Ά': 'A',
    'Έ': 'E',
    'Ί': 'I',
    'Ό': 'O',
    'Ύ': 'Y',
    'Ή': 'H',
    'Ώ': 'W',
    'Ϊ': 'I',
    'Ϋ': 'Y',
    //turkish
    'ş': 's',
    'Ş': 'S',
    'ı': 'i',
    'İ': 'I',
    // 'ç': 'c', // duplicate
    // 'Ç': 'C', // duplicate
    // 'ü': 'ue', // duplicate
    // 'Ü': 'Ue', // duplicate
    // 'ö': 'oe', // duplicate
    // 'Ö': 'Oe', // duplicate
    'ğ': 'g',
    'Ğ': 'G',
    // russian
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'sh',
    'ъ': 'u',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Yo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Й': 'J',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'C',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Sh',
    'Ъ': 'U',
    'Ы': 'Y',
    'Ь': '',
    'Э': 'E',
    'Ю': 'Yu',
    'Я': 'Ya',
    // ukranian
    'Є': 'Ye',
    'І': 'I',
    'Ї': 'Yi',
    'Ґ': 'G',
    'є': 'ye',
    'і': 'i',
    'ї': 'yi',
    'ґ': 'g',
    // czech
    'č': 'c',
    'ď': 'd',
    'ě': 'e',
    'ň': 'n',
    'ř': 'r',
    'š': 's',
    'ť': 't',
    'ů': 'u',
    'ž': 'z',
    'Č': 'C',
    'Ď': 'D',
    'Ě': 'E',
    'Ň': 'N',
    'Ř': 'R',
    'Š': 'S',
    'Ť': 'T',
    'Ů': 'U',
    'Ž': 'Z',
    // polish
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    // 'ó': 'o', // duplicate
    'ś': 's',
    'ź': 'z',
    'ż': 'z',
    'Ą': 'A',
    'Ć': 'C',
    'Ę': 'e',
    'Ł': 'L',
    'Ń': 'N',
    'Ś': 'S',
    'Ź': 'Z',
    'Ż': 'Z',
    // latvian
    'ā': 'a',
    // 'č': 'c', // duplicate
    'ē': 'e',
    'ģ': 'g',
    'ī': 'i',
    'ķ': 'k',
    'ļ': 'l',
    'ņ': 'n',
    // 'š': 's', // duplicate
    'ū': 'u',
    // 'ž': 'z', // duplicate
    'Ā': 'A',
    // 'Č': 'C', // duplicate
    'Ē': 'E',
    'Ģ': 'G',
    'Ī': 'i',
    'Ķ': 'k',
    'Ļ': 'L',
    'Ņ': 'N',
    // 'Š': 'S', // duplicate
    'Ū': 'u',
    // 'Ž': 'Z', // duplicate
    // symbols
    '“': '"',
    '”': '"',
    '‘': "'",
    '’': "'",
    '∂': 'd',
    'ƒ': 'f',
    '™': '(TM)',
    '©': '(C)',
    'œ': 'oe',
    'Œ': 'OE',
    '®': '(R)',
    '†': '+',
    '℠': '(SM)',
    '…': '...',
    '˚': 'o',
    'º': 'o',
    'ª': 'a',
    '•': '*',
    // currency
    "$": 'USD',
    '€': 'EUR',
    '₢': 'BRN',
    '₣': 'FRF',
    '£': 'GBP',
    '₤': 'ITL',
    '₦': 'NGN',
    '₧': 'ESP',
    '₨': 'INR',
    '₩': 'KRW',
    '₪': 'ILS',
    '₫': 'VND',
    '₭': 'LAK',
    '₮': 'MNT',
    '₯': 'GRD',
    '₱': 'ARS',
    '₲': 'PYG',
    '₳': 'ARA',
    '₴': 'UAH',
    '₵': 'GHS',
    '¢': 'cent',
    '¥': 'CNY',
    '元': 'CNY',
    '円': 'YEN',
    '﷼': 'IRR',
    '₠': 'EWE',
    '฿': 'THB'
  };

  var symbolMap = {
    'en': {
      '∆': 'delta',
      '∞': 'infinity',
      '♥': 'love',
      '&': 'and',
      '|': 'or',
      '<': 'less than',
      '>': 'greater than',
      '∑': 'sum',
      '¤': 'currency'
    },
    'de': {
      '∆': 'delta',
      '∞': 'unendlich',
      '♥': 'Liebe',
      '&': 'und',
      '|': 'oder',
      '<': 'kleiner als',
      '>': 'groesser als',
      '∑': 'Summe von',
      '¤': 'Waehrung'
    },

    'fr': {
      '∆': 'delta',
      '∞': 'infiniment',
      '♥': 'Amour',
      '&': 'et',
      '|': 'ou',
      '<': 'moins que',
      '>': 'superieure a',
      '∑': 'somme des',
      '¤': 'monnaie'
    },

    'es': {
      '∆': 'delta',
      '∞': 'infinito',
      '♥': 'amor',
      '&': 'y',
      '|': 'u',
      '<': 'menos que',
      '>': 'mas que',
      '∑': 'suma de los',
      '¤': 'moneda'
    },
    'ru': {
      '∆': 'delta',
      '∞': 'beskonechno',
      '♥': 'lubov',
      '&': 'i',
      '|': 'ili',
      '<': 'menshe',
      '>': 'bolshe',
      '∑': 'summa',
      '¤': 'valjuta'
    }
  };

  var getSlug = function getSlug(string, opts) {

    var maintainCase = typeof opts === 'object' && opts.maintainCase || false,
      separator = typeof opts === 'object' && opts.separator || '-',
      truncate = typeof opts === 'object' && opts.truncate,
      language = typeof opts === 'object' && opts.lang || 'en',
      uricFlag = typeof opts === 'object' && opts.uric || false,
      uricNoSlashFlag = typeof opts === 'object' && opts.uricNoSlash || false,
      markFlag = typeof opts === 'object' && opts.mark || false,
      symbol = symbolMap[language] || symbolMap.en,
      customChars = typeof opts === 'object' && opts.custom || {},
      uricChars = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'],
      uricNoSlashChars = [';', '?', ':', '@', '&', '=', '+', '$', ','],
      markChars = ['.', '!', '~', '*', '\'', '(', ')'],
      result = '',
      lucky,
      allowedChars = [],
      i,
      ch,
      l,
      lastCharWasSymbol;

    if (typeof string !== 'string') {
      return '';
    }

    if (typeof opts === 'string') {
      separator = opts;
    } else if (typeof opts === 'object') {
      if (uricFlag) {
        allowedChars = allowedChars.concat(uricChars);
      }
      if (uricNoSlashFlag) {
        allowedChars = allowedChars.concat(uricNoSlashChars);
      }
      if (markFlag) {
        allowedChars = allowedChars.concat(markChars);
      }
    }

    allowedChars = (allowedChars.join('') + separator).replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");

    // trim whitspaces
    string = string.replace(/(^\s+|\s+$)/g, '');

    lastCharWasSymbol = false;
    for (i = 0, l = string.length; i < l; i++) {

      ch = string[i];

      if (customChars[ch]) {
        ch = lastCharWasSymbol && customChars[ch].match(/[A-Za-z]/) ? ' ' + customChars[ch] : customChars[ch];
        lastCharWasSymbol = false;
      } else if (charMap[ch]) {
        ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z]/) ? ' ' + charMap[ch] : charMap[ch];
        lastCharWasSymbol = false;
      } else if (
        symbol[ch] && !(uricFlag && uricChars.join('').indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars.join('').indexOf(ch) !== -1) && !(markFlag && markChars.join('').indexOf(ch) !== -1)) {

        if (lastCharWasSymbol || (result.length && result[result.length - 1].match(/[A-Za-z]/))) {
          ch = ' ' + symbol[ch];
        } else {
          ch = symbol[ch];
        }
        lastCharWasSymbol = true;
      } else {
        ch = lastCharWasSymbol && ch.match(/[A-Za-z]/) || (result.length && result[result.length - 1].match(/[^\d]/) && ch.match(/[\d]/)) ? ' ' + ch : ch;
        lastCharWasSymbol = false;
      }

      // add allowed chars 
      result += ch.replace(new RegExp('[^A-Za-z0-9-_\\w\\s' + allowedChars + '-]', 'g'), '');
    }

    result = result
      .replace(/\s+/g, separator) // eliminate duplicate separators
      .replace(new RegExp('\\' + separator + '+', 'g'), separator) // add separator
      .replace(new RegExp('(^\\' + separator + '+|\\' + separator + '+$)', 'g'), ''); // trim separators from start and end

    if (truncate && result.length > truncate) {

      lucky = result.charAt(truncate) === separator;
      result = result.slice(0, truncate);

      if (!lucky) {
        result = result.slice(0, result.lastIndexOf(separator));
      }
    }

    if (!maintainCase) {
      result = result.toLowerCase();
    }

    return result;
  };

  if (typeof module !== 'undefined') {
    module.exports = getSlug;
  } else {
    window.getSlug = getSlug;
  }
})();
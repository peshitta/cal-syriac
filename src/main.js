/** @module calSyriac */
import { Writing, Mapper } from 'aramaic-mapper';
import {
  allConsonants as calConsonants,
  vowels as calVowels,
  diacritics as calDiacritics
} from 'cal-code-util';
import {
  consonants as syriacConsonants,
  easternCommonVowels as easternSyriacCommonVowels,
  easternOnlyVowels as easternSyriacOnlyVowels,
  westernVowels as westernSyriacVowels,
  commonDiacritics as syriacDiacritics
} from 'syriac-code-util';

/**
 * @private
 * CAL source writing
 * @const
 * @type { Writing }
 */
const calWriting = new Writing(calConsonants, calVowels, calDiacritics);

/**
 * @private
 * Syriac destination writing with Eastern vowels
 * @const
 * @type { Writing }
 */
const easternSyriacWriting = new Writing(
  // + Palestinian and Hebrew Shin
  Object.freeze(syriacConsonants.concat('\u0727', '\u0723')),
  Object.freeze(
    // duplicate the . under diacritic for i and u
    easternSyriacCommonVowels.concat(['\u073C'].concat(easternSyriacOnlyVowels))
  ),
  syriacDiacritics
);

/**
 * Aramaic Eastern Mapper
 * @const
 * @type { Mapper }
 */
export const easternMapper = new Mapper(calWriting, easternSyriacWriting);

/**
 * @private
 * Syriac destination writing with Western vowels
 * @const
 * @type { Writing }
 */
const westernSyriacWriting = new Writing(
  // + Palestinian and Hebrew Shin
  Object.freeze(syriacConsonants.concat('\u0727', '\u0723')),
  // CAL eastern short E and O mapped to western Rbasa and Esasa respectively
  Object.freeze(westernSyriacVowels.concat('\u0736', '\u073D')),
  syriacDiacritics
);

/**
 * @private
 * Maps input character to Syriac char
 * @param { string } c input character
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } Syriac mapped char
 */
const map = (c, fromTo) => fromTo[c] || c;

/**
 * @private
 * Customized mapping callback
 * @param { string } word input word
 * @param { number } i current index in the word
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } Syriac mapped char
 */
const westernCallback = (word, i, fromTo) => {
  let m = '';
  const c = word.charAt(i);
  switch (c) {
    case 'y':
      m =
        word.charAt(i + 1) === 'i'
          ? '\u073A\u071D' // Western Syriac stores as (iy)
          : map(c, fromTo);
      break;
    case 'w':
      m =
        word.charAt(i + 1) === 'u'
          ? '\u073D\u0718' // Western Syriac stores as (uw)
          : word.charAt(i + 1) === 'O'
            ? '\u0733\u0718' // Eastern O stored as (ow)
            : map(c, fromTo);
      break;
    default:
      m = map(c, fromTo);
      break;
  }
  return m;
};

/**
 * Aramaic Western Mapper
 * @const
 * @type { Mapper }
 */
export const westernMapper = new Mapper(
  calWriting,
  westernSyriacWriting,
  westernCallback
);

/**
 * Convert from CAL to Eastern Syriac Unicode - only vowels differ from western
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Eastern Syriac Unicode
 */
export const toEasternSyriac = word => easternMapper.map(word);

/**
 * Convert from CAL to Western Syriac Unicode - only vowels differ from eastern
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Western Syriac Unicode
 */
export const toWesternSyriac = word => westernMapper.map(word);

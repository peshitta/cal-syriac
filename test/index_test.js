const test = require('assert');
const sut = require('../build/cal-syriac');

describe('CAL', () => {
  describe('To Eastern Syriac', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toEasternSyriac('dqsry)-dpylypws');
      const wordExpected = 'ܕܩܣܪܝܐ-ܕܦܝܠܝܦܘܣ';
      const vocalised = sut.toEasternSyriac("d'qesariya)-d,p,yilyip'wOs");
      const vocalisedExpected = 'ܕ݁ܩܹܣܲܪܼܝܲܐ-ܕ݂ܦ݂ܝܼܠܝܼܦ݁ܘܿܣ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toEasternSyriac('dylydwth');
      const wordExpected = 'ܕܝܠܝܕܘܬܗ';
      const vocalised = sut.toEasternSyriac("d'yilyid,wut,eh");
      const vocalisedExpected = 'ܕ݁ܝܼܠܝܼܕ݂ܘܼܬ݂ܹܗ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_yi consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac_yi vocalised'
      );
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toEasternSyriac(')wld');
      const wordExpected = 'ܐܘܠܕ';
      const vocalised = sut.toEasternSyriac(')awlEd');
      const vocalisedExpected = 'ܐܲܘܠܸܕ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_yi consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac_yi vocalised'
      );
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toEasternSyriac('lb(ldbbykwn');
      const wordExpected = 'ܠܒܥܠܕܒܒܝܟܘܢ';
      const vocalised = sut.toEasternSyriac("lab,(eld'b,ob,ayk'wun");
      const vocalisedExpected = 'ܠܲܒ݂ܥܹܠܕ݁ܒ݂ܵܒ݂ܲܝܟ݁ܘܼܢ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_wu consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac_wu vocalised'
      );
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toEasternSyriac(')bhwhy');
      const vocalised = sut.toEasternSyriac(')ab,ohawh_y');
      const wordExpected = 'ܐܒܗܘܗܝ';
      const vocalisedExpected = 'ܐܲܒ݂ܵܗܲܘܗ݇ܝ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac_wO vocalised'
      );
    });
    it('Word with Palestinian P', () => {
      const word = sut.toEasternSyriac(')Pbhwhy');
      const vocalised = sut.toEasternSyriac(')aPeb,ohawh_y');
      const wordExpected = 'ܐܧܒܗܘܗܝ';
      const vocalisedExpected = 'ܐܲܧܹܒ݂ܵܗܲܘܗ݇ܝ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac vocalised with P'
      );
    });
    it('Word with Hebrew Shin', () => {
      const word = sut.toEasternSyriac(')Pbhwh&');
      const wordExpected = 'ܐܧܒܗܘܗܣ';
      const vocalised = sut.toEasternSyriac(')aPeb,ohawh_&o');
      const vocalisedExpected = 'ܐܲܧܹܒ݂ܵܗܲܘܗ݇ܣܵ';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toEasternSyriac vocalised with P'
      );
    });
    it('Blank word returns blank', () => {
      const word = sut.toEasternSyriac('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toEasternSyriac(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toEasternSyriac(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toEasternSyriac(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toEasternSyriac_zero');
    });
  });
  describe('Eastern Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.easternMapper.fromWriting.consonants.length,
        sut.easternMapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.easternMapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.easternMapper.fromWriting.vowels.length,
        sut.easternMapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(sut.easternMapper.fromWriting.vowels.length > 5, 'Length greater than 5');
    });
    it('Diacritics length', () => {
      test.strictEqual(
        sut.easternMapper.fromWriting.diacritics.length,
        sut.easternMapper.toWriting.diacritics.length,
        'Length differs'
      );
      test.ok(sut.easternMapper.fromWriting.diacritics.length === 4, 'Length equal to 4');
    });
  });
});

describe('CAL', () => {
  describe('To Western Syriac', () => {
    it('Blank word returns blank', () => {
      const word = sut.toWesternSyriac('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toWesternSyriac_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toWesternSyriac(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toWesternSyriac_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toWesternSyriac(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toWesternSyriac_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toWesternSyriac(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toWesternSyriac_zero');
    });
  });
  describe('Western Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.westernMapper.fromWriting.consonants.length,
        sut.westernMapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.westernMapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.westernMapper.fromWriting.vowels.length,
        sut.westernMapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(sut.westernMapper.fromWriting.vowels.length > 5, 'Length greater than 5');
    });
    it('Diacritics length', () => {
      test.strictEqual(
        sut.westernMapper.fromWriting.diacritics.length,
        sut.westernMapper.toWriting.diacritics.length,
        'Length differs'
      );
      test.ok(sut.westernMapper.fromWriting.diacritics.length === 4, 'Length equal to 4');
    });
  });
});

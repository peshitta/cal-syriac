# cal-syriac

[![npm version](https://badge.fury.io/js/cal-syriac.svg)](https://badge.fury.io/js/cal-syriac)
[![npm module downloads](http://img.shields.io/npm/dt/cal-syriac.svg)](https://www.npmjs.org/package/cal-syriac)
[![Build Status](https://travis-ci.org/peshitta/cal-syriac.svg?branch=master)](https://travis-ci.org/peshitta/cal-syriac)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-syriac/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-syriac.svg)](https://david-dm.org/peshitta/cal-syriac)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-syriac/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-syriac?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

CAL Code to Syriac Unicode conversion

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-syriac --save
```

Following bundles are available:
* `cal-syriac.js` - UMD ES5 version for use in browser, node, etc.
* `cal-syriac.min.js` - minified version of `cal-syriac.js`
* `cal-syriac.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-syriac/-/cal-syriac-1.0.8.tgz](https://registry.npmjs.org/cal-syriac/-/cal-syriac-1.0.8.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

For Syriac to CAL conversion see:
[syriac-cal](https://github.com/peshitta/syriac-cal)

## License

[MIT](https://github.com/peshitta/cal-syriac/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-syriac/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [calSyriac](#module_calSyriac)
    * [.easternMapper](#module_calSyriac.easternMapper) : <code>Mapper</code>
    * [.westernMapper](#module_calSyriac.westernMapper) : <code>Mapper</code>
    * [.toEasternSyriac](#module_calSyriac.toEasternSyriac) ⇒ <code>string</code>
    * [.toWesternSyriac](#module_calSyriac.toWesternSyriac) ⇒ <code>string</code>

<a name="module_calSyriac.easternMapper"></a>

### calSyriac.easternMapper : <code>Mapper</code>
Aramaic Eastern Mapper

**Kind**: static constant of [<code>calSyriac</code>](#module_calSyriac)  
<a name="module_calSyriac.westernMapper"></a>

### calSyriac.westernMapper : <code>Mapper</code>
Aramaic Western Mapper

**Kind**: static constant of [<code>calSyriac</code>](#module_calSyriac)  
<a name="module_calSyriac.toEasternSyriac"></a>

### calSyriac.toEasternSyriac ⇒ <code>string</code>
Convert from CAL to Eastern Syriac Unicode - only vowels differ from western

**Kind**: static constant of [<code>calSyriac</code>](#module_calSyriac)  
**Returns**: <code>string</code> - the input word converted to Eastern Syriac Unicode  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

<a name="module_calSyriac.toWesternSyriac"></a>

### calSyriac.toWesternSyriac ⇒ <code>string</code>
Convert from CAL to Western Syriac Unicode - only vowels differ from eastern

**Kind**: static constant of [<code>calSyriac</code>](#module_calSyriac)  
**Returns**: <code>string</code> - the input word converted to Western Syriac Unicode  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |


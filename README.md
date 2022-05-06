# nospace

[![npm (scoped)](https://img.shields.io/npm/v/@nataliajagiello/nospace.svg)](https://www.npmjs.com/package/@nataliajagiello/nospace)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@nataliajagiello/nospace.svg)](https://www.npmjs.com/package/@nataliajagiello/nospace)


## Install

```
$ npm install @nataliajagiello/nospace
```

## Usage

```js
const nospace = require("@nataliajagiello/nospace");

nospace("So much space!");
//=> "Somuchspace!"

nospace(1337);
//=> Uncaught TypeError: String is required!
//    at nospace (<anonymous>:2:41)
//    at <anonymous>:1:1
```

Package that removes all spaces from a string

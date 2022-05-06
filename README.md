# nospace

[![npm (scoped)](https://img.shields.io/npm/v/@natalia.jagiello/nospace.svg)](https://www.npmjs.com/package/@natalia.jagiello/nospace)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@natalia.jagiello/nospace.svg)](https://www.npmjs.com/package/@natalia.jagiello/nospace)


## Install

```
$ npm install @natalia.jagiello/nospace
```

## Usage

```js
const nospace = require("@natalia.jagiello/nospace");

nospace("So much space!");
//=> "Somuchspace!"

nospace(1337);
//=> Uncaught TypeError: String is required!
//    at nospace (<anonymous>:2:41)
//    at <anonymous>:1:1
```

Package that removes all spaces from a string

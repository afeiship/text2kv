# text2kv
> Text array to kv list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/text2kv
```

## usage
```js
import text2kv from '@jswork/text2kv';

const arr = ['a', 'b', 'c'];
const result = text2kv(arr);

/*
[
  { value: "a", label: "a" },
  { value: "b", label: "b" },
  { value: "c", label: "c" },
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/text2kv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/text2kv
[version-url]: https://npmjs.org/package/@jswork/text2kv

[license-image]: https://img.shields.io/npm/l/@jswork/text2kv
[license-url]: https://github.com/afeiship/text2kv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/text2kv
[size-url]: https://github.com/afeiship/text2kv/blob/master/dist/text2kv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/text2kv
[download-url]: https://www.npmjs.com/package/@jswork/text2kv

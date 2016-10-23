# sort-json-array

>  Sort an array of JSON objects by a property

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install sort-json-array --save
```

## Usage

Sort an array of JSON objects by a property:

```js
var sortJsonArray = require('sort-json-array');

sortJsonArray([{name: 'c'}, {name: 'a'}, {name: 'b'}], 'name');
//=> [{name: 'a'}, {name: 'b'}, {name: 'c'}]
```

## Params

```js
sortJsonArray(array, property);
```

* `array`: **{Array}** The array to be sorted.
* `property`: **{String}**: The Property based on what the array should be sorted.

## Examples

```js
var sortJsonArray = require('sort-json-array');

var user = [
  { name: 'c', location: "San Jose" },
  { name: 'a', location: "San Francisco"},
  { name: 'b', location: "New York" },
];

// sort by `name`
console.log(arraySort(user, 'name'));

// sort by `location`
console.log(arraySort(user, 'location'));
```

## Author

**Apurva Patel**

## License

Copyright © 2016, [Apurva Patel](https://github.com/apurvapatel141092).
Released under the [MIT license](https://github.com/apurvapatel141092/sort-json-array/blob/master/LICENSE).

***
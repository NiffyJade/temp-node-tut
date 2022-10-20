"use strict";

var _ = require('lodash');

var items = [1, [2, [3, [5]]]];

var newItems = _.flattenDeep(items);

console.log(newItems);
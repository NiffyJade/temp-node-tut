"use strict";

var path = require('path');

console.log(path.step);
var filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);
var base = path.basename(filePath);
console.log(base);
var absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
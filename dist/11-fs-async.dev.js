"use strict";

var _require = require('fs'),
    readFile = _require.readFile,
    writeFile = _require.writeFile;

console.log('start');
readFile('./content/first.txt', 'utf8', function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  var first = result;
  readFile('./content/second.txt', 'utf8', function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    var second = result;
    writeFile('./content/result-async.txt', "Here is the result : ".concat(first, ", ").concat(second), function (err, result) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('done with this task');
    });
  });
});
console.log('starting next task');
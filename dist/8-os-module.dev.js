"use strict";

var os = require('os'); // info about current user


var user = os.userInfo();
console.log(user); // method returns the system uptime in seconds

console.log("The system uptime is ".concat(os.uptime(), " seconds"));
var currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};
console.log(currentOS);
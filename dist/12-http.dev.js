"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.end('Welcome to our homepage');
  }

  if (req.url === '/about') {
    res.end('Here is our short history');
  }

  res.end("\n    <h1>Oops!</h1>\n    <p>We can't seem to find the page you are looking for</p>\n    <a href=\"/\">Back Home</a>\n    ");
});
server.listen(5000);
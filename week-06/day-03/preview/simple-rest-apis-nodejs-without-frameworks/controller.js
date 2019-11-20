const http = require("http"); //enables to create web applications. It supports both client and server operations
const url = require("url"); //helps in parsing urls

module.exports = http.createServer((req, res) => {
  var service = require("./service.js");
  const reqUrl = url.parse(req.url, true); //true is used to parse the query string

  // GET Endpoint
  if (reqUrl.pathname == "/sample" && req.method === "GET") {
    console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);
    service.sampleRequest(req, res);
    // POST Endpoint
  } else if (reqUrl.pathname == "/test" && req.method === "POST") {
    console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);

    service.testRequest(req, res);
  } else {
    console.log(
      "Request Type:" + req.method + " Invalid Endpoint: " + reqUrl.pathname
    );

    service.invalidRequest(req, res);
  }
});

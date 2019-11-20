const hostname = "127.0.0.1";
const port = 3000;

const server = require("./controller.js");

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const url = require("url");

//This code checks if the request URL has a query parameter called as name and stores it in name variable. If no query parameter is present, it defaults to the string World
exports.sampleRequest = function(req, res) {
  const reqUrl = url.parse(req.url, true);
  var name = "World";
  if (reqUrl.query.name) {
    name = reqUrl.query.name;
  }

  var response = {
    text: "Hello " + name
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};

exports.testRequest = function(req, res) {
  body = "";

  //The request comes in the form of a stream. This code takes the stream of data and keeps appending it to body.
  req.on("data", function(chunk) {
    body += chunk;
  });

  req.on("end", function() {
    //is executed only after the streaming is complete and the full post body is received.
    postBody = JSON.parse(body); //This code converts the input post body into JSON format so that we can use the values in it.

    var response = {
      text: "Post Request Value is  " + postBody.value
    };

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    // == res.writeHead(201,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(response));
  });
};

exports.invalidRequest = function(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Invalid Request");
};

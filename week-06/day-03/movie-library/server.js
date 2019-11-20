const hostname = "127.0.0.1";
const port = 3000;
const http = require("http");
const url = require("url");
const moviesResponse = require("./moviesResponse");

const server = http.createServer((req, res) => {
  console.log("request received");
  let response, obj, result;
  const reqUrl = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");
  if (reqUrl.pathname === "/movies") {
    switch (req.method) {
      case "GET":
        if (Object.keys(reqUrl.query).length !== 0) {
          const query = Object.keys(reqUrl.query)[0];
          const value = Object.values(reqUrl.query)[0];
          obj = {
            key: query,
            value: value
          };
        } else {
          obj = {
            key: "all"
          };
        }
        result = moviesResponse(obj, req.method);
        response = result.response;
        res.statusCode = result.statusCode;
        res.end(JSON.stringify(response));
        break;
      case "POST":
        if (req.headers.authorization !== "top-secret") {
          result = {
            response: ["Don't have enough authorization"],
            statusCode: 403
          };
        } else {
          let requestBody = "";
          req.on("data", chunk => {
            requestBody += chunk;
          });
          req.on("end", () => {
            result = moviesResponse(requestBody, req.method);
            response = result.response;
            res.statusCode = result.statusCode;
            res.end(JSON.stringify(response));
          });
        }

        break;
    }
  }
  if (reqUrl.pathname.startsWith("/movies")) {
    const id = reqUrl.pathname.split("/").splice(-1)[0];
    if (!isNaN(parseInt(id))) {
      obj = {
        key: "id",
        value: parseInt(id)
      };
      switch (req.method) {
        case "GET":
          result = moviesResponse(obj, "GET");
          response = result.response;
          res.statusCode = result.statusCode;
          res.end(JSON.stringify(response));
          break;
        case "DELETE":
          if (req.headers.authorization !== "top-secret") {
            result = {
              response: ["Don't have enough authorization"],
              statusCode: 403
            };
          } else {
            result = moviesResponse(obj, "DELETE");
          }
          response = result.response;
          res.statusCode = result.statusCode;
          res.end(JSON.stringify(response));
          break;
        case "PUT":
          if (req.headers.authorization !== "top-secret") {
            result = {
              response: ["Don't have enough authorization"],
              statusCode: 403
            };
          } else {
            let requestBody = "";
            req.on("data", chunk => {
              requestBody += chunk;
            });
            req.on("end", () => {
              if (requestBody === "") {
                result = {
                  response: ["Missing Data"],
                  statusCode: 400
                };
              } else {
                const parsedBody = JSON.parse(requestBody);
                if (parsedBody.id !== parseInt(id)) {
                  result = {
                    response: ["Please ensure the id is the same"],
                    statusCode: 400
                  };
                } else {
                  result = moviesResponse(parsedBody, req.method);
                  console.log(result);
                }
              }
              response = result.response;
              res.statusCode = result.statusCode;
              res.end(JSON.stringify(response));
            });
          }
      }
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require("http");
const url = require("url");
const HOST = "127.0.0.1";
const PORT = 3000;
const contentType = "application/json";

function changeRes(res) {
  res.send = function(data) {
    res.setHeader("Content-Type", contentType);
    res.end(data);
  };
}

const server = () => {
  let G = this;
  G._get = {};
  G._post = {};

  let requestHandler = (req, res) => {
    changeRes(res);
    let pathName = url.parse(req.url).pathname;
    if (!pathName.endsWith("/")) pathName += "/";
    switch (req.method) {
      case "GET":
        res.end("this is get");
    }
  };
};

server.listen(PORT, HOST, () => {
  console.log(`App is listening on ${HOST}:${PORT}`);
});

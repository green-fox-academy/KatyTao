const express = require("express");
const data = require("./static/data");
const requestHandler = require("./controller");

const app = express();
const PORT = process.env.PORT || 8080;

//set static file serving
app.use("/static", express.static("static"));

app.use(express.json());

app.get("/api/todos", (req, res) => {
  const result = requestHandler({}, "GET");
  res.json(result.response);
  res.status(result.statusCode);
});

app.post("/api/todos", (req, res) => {
  let todo = req.body; //array item (text)
  const result = requestHandler(todo, "POST");
  res.json(result.response);
  res.status(result.statusCode);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const result = requestHandler(id, "DELETE");
  res.json(result.response);
  res.status(result.statusCode);
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const result = requestHandler(id, "PUT");
  res.json(result.response);
  res.status(result.statusCode);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const DEFAULT_URL = "/api";
const posts = require("./routes/posts");

//set static file serving
app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.get(`${DEFAULT_URL}/posts`, posts.getPosts);

app.post(`${DEFAULT_URL}/posts`, posts.postPosts);

app.put(`${DEFAULT_URL}/posts/:id/:vote`, posts.putPosts);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

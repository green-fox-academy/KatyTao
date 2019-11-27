const conn = require("../connection").promise();
const { format } = require("mysql2");

module.exports = {
  getComments: async (req, res) => {
    if (req.header("accept") === "application/json") {
      const postId = req.params.id;
      const selectPost = `SELECT * FROM posts WHERE id = ${postId}`;
      //TODO: update userId when use session Id
      const selectVote = `SELECT * FROM vote WHERE postsId=${postId} AND userId = 1`;
      const joinQuery = `SELECT A.id, A.title, A.url, A.timestamp, A.score, B.name AS owner, C.vote
      FROM (${selectPost}) A
      INNER JOIN user B
      ON A.userId = B.id
      INNER JOIN (${selectVote}) AS C
      ON C.postsId = A.id;`;
      const selectComment = `SELECT A.id, A.text, A.score, B.name AS owner FROM comment A, user B WHERE postId = ${postId} AND A.userId = B.id`;
      const commentsList = await conn.query(selectComment);
      conn.query(joinQuery, function(error, results) {
        if (error) throw error;
        const resultList = { ...results[0], comments: [commentsList[0]] };
        res.status(200);
        res.json(resultList);
      });
    }
  },

  postComments: (req, res) => {
    const postId = req.params.id;
    if (
      req.header("accept") === "application/json" &&
      req.header("content-type") === "application/json"
    ) {
      const insertQuery = `INSERT INTO comment (text, userId, postId) VALUES (?,?,?)`;
      //TODO: update userId to session id
      conn.query(insertQuery, [req.body.text, 1, postId]);
      const selectComment = `SELECT A.id, A.text, A.score, B.name AS owner FROM comment A, user B WHERE postId = ${postId} AND A.userId = B.id AND A.id = LAST_INSERT_ID()`;
      conn.query(selectComment, function(error, results) {
        if (error) throw error;
        res.status(201);
        res.json(results[0]);
      });
    } else {
      res.send("header invalided");
    }
  }
};

const conn = require("../connection").promise();
const { format } = require("mysql2");

module.exports = {
  getPosts: (req, res) => {
    if (req.header("accept") === "application/json") {
      const queryString = "SELECT id, title, url, timestamp, score FROM posts";
      conn.query(queryString, function(error, results) {
        if (error) throw error;
        const returnBody = {
          posts: results
        };
        res.status(200);
        res.json(returnBody);
      });
    } else {
      res.status(403);
      res.send("Accept invalided");
    }
  },
  postPosts: (req, res) => {
    if (
      req.header("accept") === "application/json" &&
      req.header("content-type") === "application/json"
    ) {
      const timestamp = Date.now();
      const insertQuery = `INSERT INTO posts (title, url, timestamp, userId) VALUES (?,?,?,?)`;
      conn.query(insertQuery, [req.body.title, req.body.url, timestamp, 1]);
      const selectQuery =
        "SELECT id, title, url, timestamp, score FROM posts WHERE id = LAST_INSERT_ID()";
      conn.query(selectQuery, function(error, results) {
        if (error) throw error;
        res.status(201);
        res.json(results[0]);
      });
    } else {
      res.send("header invalided");
    }
  },
  putPosts: (req, res) => {
    if (req.header("accept") === "application/json") {
      let vote;
      const userId = 1;

      if (req.params.vote === "upvote") {
        vote = "+1";
      } else if (req.params.vote === "downvote") {
        vote = "-1";
      }

      const selectQuery = `SELECT vote FROM vote WHERE userId=${userId} AND postsId=${req.params.id}`;
      const putQuery = `UPDATE posts SET score = score ${vote} WHERE id = ?`;
      const insertVote = `INSERT INTO vote (userId, postsId, vote) VALUES (?,?,?)`;
      const updateVote = `UPDATE vote SET vote = vote ${vote} WHERE userId = ? AND postsId =?`;
      //if vote exist
      const putInsertQuery = format(`${putQuery}; ${insertVote};`, [
        req.params.id,
        userId,
        req.params.id,
        vote
      ]);
      //if vote doesn't exist
      const putUpdateQuery = format(`${putQuery}; ${updateVote};`, [
        req.params.id,
        userId,
        req.params.id
      ]);
      const responseQuery = `SELECT id, title, url, timestamp, score FROM posts WHERE id = "${req.params.id}"`;
      conn.query(selectQuery, function(error, results) {
        if (error) throw error;
        if (results.length) {
          //if vote already exist
          if (results[0].vote !== parseInt(vote)) {
            //if vote is different, update vote
            conn.query(putUpdateQuery, function(error) {
              if (error) {
                throw error;
              } else {
                conn.query(responseQuery, function(error, result) {
                  res.json(result[0]);
                });
              }
            });
          } else {
            res.json(`already ${req.params.vote}`);
          }
        } else {
          //if vote doesn't exist, insert a new vote row
          conn.query(putInsertQuery, function(error) {
            if (error) {
              throw error;
            } else {
              conn.query(responseQuery, function(error, result) {
                res.json(result[0]);
              });
            }
          });
        }
      });
    }
  }
};

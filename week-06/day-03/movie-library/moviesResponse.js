let movies = require("./data").movies;
module.exports = function moviesResponse(value, method) {
  let response = [],
    statusCode;
  switch (method) {
    case "GET":
      if (value.key === "all") {
        response = movies;
      } else {
        movies.map(item => {
          if (item[value.key] === value.value) {
            response.push(item);
          }
        });
      }
      statusCode = 200;
      break;
    case "DELETE":
      const temp = movies.filter(item => {
        return item.id !== value.value;
      });
      if (temp.length !== movies) {
        movies = temp;
        response = ["Delete successfully"];
        statusCode = 204;
      } else {
        response = ["Can't find this movie"];
        statusCode = 404;
      }
      break;
    case "POST":
      if (value === "") {
        response = ["Missing Data"];
        statusCode = 400;
      } else {
        const parsedBody = JSON.parse(value);
        let tempSet = [...movies];
        if (tempSet.some(item => item.name === parsedBody.name)) {
          response = ["This movie exist already"];
          statusCode = 409;
        } else {
          if (!parsedBody.genre) {
            parsedBody.genre = "unknown";
          }
          if (!parsedBody.name) {
            response = ["Missing title"];
            statusCode = 400;
          } else {
            tempSet.push(parsedBody);
            movies = tempSet;
            response = ["post successfully"];
            statusCode = 201;
          }
        }
      }
      break;
    case "PUT":
      if (value.id !== "" && value.name !== "" && value.genre !== "") {
        const exist = movies.filter(item => {
          item.id === value.id;
        });

        if (exist.length !== 0) {
          movies.forEach(item => {
            if (value.id === item.id) {
              item.name = value.name;
              item.genre = value.genre;
            }
          });
          response = ["Update successfully"];
          statusCode = 200;
        } else {
          response = ["Theres no movie with this id"];
          statusCode = 404;
        }
      } else {
        response = ["Please ensure every field is filled"];
        statusCode = 400;
      }
      break;
  }
  if (response.length === 0) {
    statusCode = 404;
  }
  return {
    response,
    statusCode
  };
};

const data = require("./static/data");
const todoArr = data.todos;
module.exports = function requestHandler(value, method) {
  let response, statusCode, index;
  switch (method) {
    case "GET":
      response = todoArr;
      statusCode = 200;
      break;
    case "POST":
      if (value.text === "") {
        response = "Missing text";
        statusCode = 400;
      } else {
        const newObj = {
          id: todoArr[todoArr.length - 1].id + 1,
          text: value.text,
          done: false
        };
        todoArr.push(newObj);
        response = newObj;
        statusCode = 201;
      }
      break;
    case "DELETE":
      index = todoArr.findIndex(item => item.id === parseInt(value));
      if (index !== -1) {
        response = todoArr[index];
        statusCode = 200;
        todoArr.splice(index, 1);
      } else {
        response = "Not exist!";
        statusCode = 404;
      }
      break;
    case "PUT":
      index = todoArr.findIndex(item => item.id === parseInt(value));
      if (index) {
        if (todoArr[index].done) {
          todoArr[index].done = false;
        } else {
          todoArr[index].done = true;
        }
        response = todoArr[index];
      } else {
        response = "Not exist!";
        statusCode = 404;
      }
      break;
  }
  return {
    response,
    statusCode
  };
};

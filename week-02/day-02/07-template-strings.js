`use strict`
function log(timestamp, username, action) {
  console.log("INFO - {" + timestamp + "}\n{" + username +"} : {" + action + "}");  //before ES6
}

function logES6(timestamp, username, action) {
  console.log(`INFO - {${timestamp}}\n {${username}} : {${action}}`); //from ES6
  
}
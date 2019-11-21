const express = require("express");
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.json());

// home page
let greetSet = [{ user: "", count: 0 }];
app.get("/greeting", (req, res) => {
  //render 'greeting.ejs'
  const { name } = req.query;

  const findUser = greetSet.find(item => item.user === name);
  if (findUser) {
    findUser.count += 1;
  } else {
    greetSet.push({ user: name, count: 1 });
  }
  const result = {
    greetCount: greetSet.find(item => item.user === name).count,
    content: `Hello,${name}!`
  };

  res.render("greeting", {
    result
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

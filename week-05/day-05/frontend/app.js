const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

//Add serving static assets to serve the folder
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  let result;
  if(input) {
    result = {
      "received": Number(input),
      "result": Number(input)*2,
    }
  } else {
    result = {
      "error": "Please provide an input!"
    }
  }
  console.log(result);
  res.json(result);
})

app.get('/greeter', (req,res) => {
  const { name, title } = req.query;
  let result;
  if (name && title) {
    result = {
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    }
  } else if (name) {
    result = { error: 'Please provide a title!' };
  } else if (title) {
    result = { error: 'Please provide a name!' };
  } else {
    result = { error: 'Please provide a name and a title!' };
  }

  res.json(result);
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
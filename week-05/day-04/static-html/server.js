const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req,res)=>{
  res.sendFile('/index.html', {root:__dirname});  //no matter what url is inputted (undefined before), it will become the index.html
});

app.use('/assets',express.static('assets'));

app.listen(PORT,()=>console.log(`App is listening on ${PORT}`));
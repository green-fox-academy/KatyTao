const express = require('express');
const {forecasts} = require('./data');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//set static file serving
app.use('/static', express.static('static'));

// home page
app.get('/', (req,res) => {
  //render 'home.ejs'
  res.render('dashboard',{
    forecasts,
  })
})
app.get('/cities/:city', (req,res) => {
  //render 'home.ejs'
  const {city} = req.params;
  const index = forecasts.findIndex(item=>item.city ===city);
  const weather = forecasts[index].weather;
  
  res.render('detailed',{
    weather, city
  })
})

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
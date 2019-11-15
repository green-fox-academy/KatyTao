const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

//Add serving static assets to serve the folder
app.use(express.static('assets'));
//Add an new middleware, reads the body of request, and sent do end point
app.use(express.json());


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

app.get('/appenda/:appendable', (req,res) => {
 const {appendable} = req.params;
 result = {
  "appended": appendable+'a',
 }
 res.json(result);
})

app.post('/dountil/:action', (req,res) => {
  let { until } = req.body;
  const { action } = req.params;
  let result;
  if(until) {
    until = Number(until);
    switch(action){
      case 'sum':
        result = until*(until+1)/2;
        res.json({result});
        break;
      case 'factor':
        result = 1;
        for (let i = 1; i<=until; i++) {
          result*=i;
        }
        res.json({result});
      default:
        break;
    }     
  } else if(until === undefined) {
    result = {
      "error": "Please provide a number!"
    }
  }
  res.json(result);
})

//array handler
app.post('/arrays',(req,res) => {
  let { what, numbers } = req.body;
  let result = 0;  
  if(what&&numbers) {
    switch(what) {
      case 'sum':
        result = numbers.reduce((a, b) => a + b, 0);
        res.json({result});
        break;
      case 'multiply':
        result = numbers.reduce((a, b) => a * b, 1);
        res.json({result});
        break;
      case 'double':
        result = numbers.map(item =>{
          return item*2;
        })
        res.json({result});
        break;
    }
  } else {
    result = {
      "error": "Please provide what to do with the numbers!"
    };
    res.json(result);
  }
})

//The Reverser of the Sith
app.post('/sith',(req,res) => {
  const { text } = req.body;
  const sithSet = ["Arrgh.", "Uhmm.", "Err..err.err.", "Hmmm."];

  if(text) {
    let sithSentence = text.split(".");
    let result="";

    sithSentence.forEach(text => {  
      let sithText = text.trim().split(" ");
      if(sithText[0]!=='') {
        for (let i=0; i<sithText.length-1; i+=2) {
          let temp = sithText[i+1];
          sithText[i+1] = sithText[i];    
          sithText[i] = temp;
        }
        let sith_text = sithText.join(" ");
        sith_text = sith_text.charAt(0).toUpperCase() + sith_text.slice(1).toLowerCase();
        result += `${sith_text}. ${sithSet[Math.floor(Math.random() * 3)]} `;
      }
    });  
    res.json({sith_text:result.trim()});
  } else {
    res.json({"error": "Feed me some text you have to, padawan young you are. Hmmm."});
  }
})

//The Gibberish translator Service
app.post('/translate', (req, res) => {
  const { text, lang } = req.body;
  let result;
  if(text&&lang) {
    let originalText = text.split("");
    let resultText = [];
    const rule=["a","e","i","o","u"];
    originalText.forEach(text=>{
      if(rule.includes(text)){
        text = text+"l"+text;
      }
      resultText.push(text);
    })
    result = {
      translated: resultText.join(""),
      lang: "gibberish"
    }
  } else {
    result = {
      "error": "I can't translate that!"
    }
  }
  res.json(result);
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


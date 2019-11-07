import React, { useState, useEffect } from 'react';
import NewsList from './components/news-list';
import './App.css';

function App() {
  const [articlesSet, setArticlesSet] = useState([]);
  const [country, setCountry] = useState("cn");
  const getNews = () => {
    const apikey = `07194f3a1cce4d4d940f020a0ebb0b7c`;
    const url= `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      setArticlesSet(JSON.parse(xhr.response).articles);
     }
    xhr.send();
  }

  const updateCountry = () => {
    const code = document.querySelector(".country-code");
    setCountry(code.value);
  }

  useEffect(()=>{
    getNews();
  },[country]);

  return(
    <>
    <input className="country-code" type="text"/>
    <button onClick={updateCountry}>Submit</button>
    <NewsList items = {articlesSet}/>
    </>
  )
}

export default App;

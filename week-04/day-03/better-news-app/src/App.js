import React from 'react';
import NewsList from './components/news-list'
import './App.css';

class NewsApp extends React.Component {
  constructor() {
    super();
    this.state= {
      articles:[],
      country:'cn',
    };
    this.updateCountry = this.updateCountry.bind(this);
    this.getNews = this.getNews.bind(this);
  }

  updateCountry() {
    const code = document.querySelector(".country-code");
    console.log(code.value);   
    this.setState({
      country:code.value,
    })
  }

  getNews() {
    const apikey = `f5bdda68a887445bb4d26831177a0efc`;
    const country = this.state.country;
    const url= `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {     
      this.setState({
        articles:[...JSON.parse(xhr.response).articles],
      })           
     }
    xhr.send();
  }

  componentDidUpdate() {
    this.getNews();
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    return (
      <>
      <input className="country-code" type="text"/>
      <button onClick={this.updateCountry}>Submit</button>
      <NewsList items = {this.state.articles}/>
      </>
    )
  }
}
export default NewsApp;

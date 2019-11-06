import React from 'react';
import NewsList from './components/news-list'
import './App.css';

class NewsApp extends React.Component {
  constructor() {
    super();
    this.state= {
      articles:[],
      load:false,
    };
  }

  componentDidMount() {
    const apikey = `f5bdda68a887445bb4d26831177a0efc`;
    const url= `https://newsapi.org/v2/top-headlines?country=cn&apiKey=${apikey}`;
    const delayTime = 3000;
    const delay_url =`http://slowwy.greenfox.academy/delay/${delayTime}/url/${url}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', delay_url, true);
    xhr.onload = () => {     
      this.setState({
        articles:[...JSON.parse(xhr.response).articles],
        load:true,
      })           
     }
    xhr.send();    
  }

  render() {
    return (
      <>
      {this.state.load === true?<NewsList items = {this.state.articles}/>:<div className="lds-dual-ring"></div>}
      </>
    )
  }
}
export default NewsApp;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Router>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/error">
            Error
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={MyHome}/>
            <Route exact path="/error" component={MyError}/>
            <Route path="/error/:errorcode" component={ErrorCode}/>
            <Route render={()=><h1>This page is not implemented yet</h1>}/>
          </Switch>
        </main>
      </Router>
    );
  }
}
const MyHome = () =><h1>This is home</h1>
const MyError = () =><h1>Something bad happened.</h1> 
const ErrorCode = ({match}) =><h1>Error: {match.params.errorcode}</h1> 
export default App;
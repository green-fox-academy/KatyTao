import React from 'react';
import './App.css';
import Component1 from './components/component1';
import Component2 from './components/component2';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      mount:[],
    }
  }

  updateMount(name,time) {
    const mount = this.state.mount;
    mount.push({name,time});
    this.setState({mount});
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const mount = this.state.mount;
    console.log();    
    return(      
      <main>
        <Router>
          <NavLink to="/1">
            Component 1
          </NavLink>
          <NavLink to="/2">
            Component 2
          </NavLink>
          <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {mount.map((item)=>
              <tr>
                <td>{item.name}</td>
                <td>{item.time}s</td>
              </tr>
            )}
          </tbody>
        </table>
          <Switch>
            <Route path="/1" render={()=><Component1 updateMount={(name,time)=>this.updateMount(name,time)}/>}/>
            <Route path="/2" render={()=><Component2 updateMount={(name,time)=>this.updateMount(name,time)}/>}/>
          </Switch>
        </Router>
      </main>
    )
  }
}


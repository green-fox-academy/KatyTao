import React from "react";
import Todos from "./components/todos";
import Themes from "./components/themes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route path='/themes' component={Themes} />
            <Route
              path='/themed/:name'
              render={({ match }) => {
                const themeName = match.params.name;
                return <Todos themeName={themeName} />;
              }}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

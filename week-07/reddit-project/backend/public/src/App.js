import React from "react";
import Header from "./components/header";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostPage from "./components/posts-page";
import SubmitPage from "./components/submit-page";

function App() {
  const url = "/r/space";
  return (
    <div className='App'>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path={url} component={PostPage} />
            <Route exact path={`${url}/submit`} component={SubmitPage} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from "./components/UserForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/userform" component={UserForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
)

import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import ResultScreen from "./components/ResultScreen/ResultScreen";
import PosterScreen from "./components/PosterScreen/PosterScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Treeum</h1>
        <Switch>
          <Route path="/" exact component={SearchScreen} />
          <Route path="/searchResult" exact component={ResultScreen} />
          <Route path="/searchResult/:id" exact component={PosterScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

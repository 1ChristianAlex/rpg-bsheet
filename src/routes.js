import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import TestePage from './pages/teste';
import Header from './components/header';
export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teste" component={TestePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

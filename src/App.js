import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'

import Search from './Search/Search';

import {BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header></Header>
    <Switch>  
    <Route  path="/search">
           <Search></Search>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

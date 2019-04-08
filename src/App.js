import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './views/home';
import Detail from './views/detail';
import Character from './views/character';
import {NavBar} from './components';
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:episode_id" component={Detail}/>
            <Route exact path="/character/:id" component={Character}/>
          </div>
        </Router>
    );
  }
}

export default App;

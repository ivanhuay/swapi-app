import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import Character from './Character';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail/:episode_id" component={Detail}/>
          <Route exact path="/character/:id" component={Character}/>
        </div>
      </Router>
    );
  }
}

export default App;

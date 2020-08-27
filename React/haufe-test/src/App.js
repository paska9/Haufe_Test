import React from 'react';
import './App.css';
import Nav from './nav';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;

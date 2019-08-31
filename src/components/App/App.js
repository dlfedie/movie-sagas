import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

import './App.css';

//this.props.match.params.id



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/details' component={Details} />
          <Route path='/edit' component={Edit} />
        </div>
      </Router>
    );
  }
}

export default App;

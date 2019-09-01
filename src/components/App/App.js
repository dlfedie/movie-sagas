import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/details/:id' component={Details} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

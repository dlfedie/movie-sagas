import React, { Component } from 'react';
//used BrowserRouter to allow typing /details/1 or w/e # into the url allows it to load. had no luck
//with HashRouter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import './App.css';

//material UI
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//create our color palette here. possibly could have set other color variants instead of editing
//directly into App.css, but this was quicker. the color themes were however taken from Material's
//color picker, so they should follow that direction (lighter/darker, etc)
const theme = createMuiTheme({
  //color palette
  palette: {
    primary: {
      main: '#e53935'
    },
    secondary: {
      main: '#5c6bc0'
    }
  }
})



class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/details/:id' component={Details} />
              <Route path='/edit/:id' component={Edit} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

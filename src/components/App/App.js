import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import './App.css';

//material UI
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  //color palette
  palette: {
    primary: {
      main: '#4caf50'
    },
    secondary: {
      main: '#f4511e'
    }
  }
})



//this.props.match.params.id



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

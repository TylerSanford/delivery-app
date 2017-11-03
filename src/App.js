import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Login from './components/Login';
import Register from './components/Register';
import MyMapComponent from './MyMapComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div className="flexContainer">
            <AppBar label="Default" showMenuIconButton={false}>
              <Login /> <Register />
            </AppBar>
            <div className="banner">
              <span>Delivery Service Company!</span>
            </div>
            <MyMapComponent />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

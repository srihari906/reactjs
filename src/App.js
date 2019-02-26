import React, { Component } from 'react';
import RouterOutlet from './routes/routes';

import { MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from './theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <RouterOutlet />
      </MuiThemeProvider>
    )
  }
}

export default App

import React, { Component } from 'react';
import FinalForm from '../containers/FinalForm';
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css';
import '../App.css';

import Login from '../containers/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../style/logo.svg';
import List from './list';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <List items={[{name: 'hi'},{name: 'lol'},{name: 'test'}]} />
      </div>
    );
  }
}

export default App;

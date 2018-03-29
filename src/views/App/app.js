import React, { Component } from 'react';
import logo from 'static/logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/views/App/App.js</code> and save to
          reload. Hello
        </p>
        <div className="button">shdsd</div>
      </div>
    );
  }
}

export default App;

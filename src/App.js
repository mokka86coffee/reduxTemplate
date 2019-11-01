import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { testActionCreator } from './store/actions';
import { SideBar } from './Components';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.testActionCreator();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SideBar />
      </div>
    );
  }
}

export default connect(store => store, { testActionCreator })(App);

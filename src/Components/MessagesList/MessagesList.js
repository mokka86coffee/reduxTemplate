import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';

class MessagesList extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <main></main>
    );
  }
}

export default connect(store => store)(MessagesList);

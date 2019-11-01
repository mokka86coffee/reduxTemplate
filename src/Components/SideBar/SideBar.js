import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';

class SideBar extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <aside>
            
        </aside>
    );
  }
}

export default connect(store => store)(SideBar);

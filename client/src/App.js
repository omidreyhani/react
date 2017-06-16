import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from './users/list';
import {Add} from './users/add';


class App extends Component {
  render() {
      return (<div>
          <List></List>
          <Add></Add>

          </div>);
  }
}

export default App;

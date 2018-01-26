import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Form from './components/form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return <Form />;
  }
}

export default App;

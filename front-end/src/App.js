import React, { Component } from 'react';
import axios from 'axios'

import Form from './components/form';

const apiDetails = require('./config.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  handlePostRequest = (movieName) => {
    console.log('MOVIE --->', movieName)
    axios.get(apiDetails.baseUrl + apiDetails.apiKey + '&query=' + movieName)
      .then( (response) => {
        console.log(response)
      })
      .catch( (err) => {
        console.log(err)
      })
  }

  render() {
    return <Form searchMovies={this.handlePostRequest}/>;
  }
}

export default App;

import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      movieName: ''
    }
  }

  handleChange ({ target }) {
    this.setState({
      [target.id]: target.value
    })
  }

  handleClick (evt) {
    evt.preventDefault()
    this.props.searchMovies(this.state.movieName)
  }

  render() {
    return (
      <form>
        <input
          id="movieName"
          type="text"
          value={this.state.movieName}
          onChange={this.handleChange}
          placeholder="Enter Movie Name"
        />
        <button
          onClick={this.handleClick}
        >
          Submit
        </button>
      </form>
    );
  }
}

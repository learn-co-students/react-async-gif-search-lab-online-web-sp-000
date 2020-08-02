import React, { Component } from 'react';

class GifSearch extends Component {
  state = { input: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.input);
  }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="search-term">Enter a Search Term:</label><br />
        <input type="text" id="search-term" value={this.state.input} onChange={this.handleChange} /><br />
        <input type="submit" className="btn btn-success" value="Find Gifs" />
        <br /><br />
      </form>
    )
  }
}

export default GifSearch;
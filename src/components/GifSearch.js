import React, { Component } from 'react';

class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Enter a Search Term:</label>
        <input
          type='text'
          value={this.props.searchTerm}
          onChange={this.props.onChange}
        />
        <button type='submit'>Find Gifs</button>
      </form>
    );
  }
}

export default GifSearch;

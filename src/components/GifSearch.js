import React, { Component } from 'react';

class GifSearch extends Component {



  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your search term"
          onChange={this.props.handleChange}
        />
        <br />
        <button type="submit" name="submit" value="submit">Return GIFs</button>
      </form>
    );
  }

}

export default GifSearch;

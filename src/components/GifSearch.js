import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    search: ""
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
  };

  render() {
    return (
      <div className="gif search">
        <form onSubmit={this.handleSubmit} >
          <h4>Enter a Search Term:</h4>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Find Gifs" />
        </form>
      </div >
    );
  }

}

export default GifSearch;

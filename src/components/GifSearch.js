import React, { Component } from "react";

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchFunction(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;

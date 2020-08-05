import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" id="searchTerm" onChange={this.handleOnChange}></input>
      </form>
    )
  }
}
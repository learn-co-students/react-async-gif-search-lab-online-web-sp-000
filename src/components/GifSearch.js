import React, { Component } from "react";

export default class GifSearch extends Component {

  state = {
    searchTerm: ''
  }

  saveQuery = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendQuery(this.state.searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.searchTerm} onChange={this.saveQuery} />
        <button type="submit">Search</button>
      </form>
    )
  }
}
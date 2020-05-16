import React, { Component } from 'react';

export default class GifSearch extends Component{

  state = {searchTerm: ""}

  handleInputChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <input id="inputField" type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} />
      </form>
    )
  }
}

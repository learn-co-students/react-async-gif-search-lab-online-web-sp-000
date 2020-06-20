import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={() => {this.props.submitFunction(this.state)}}>
        <label>
          Enter a search term:
        </label>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}

export default GifSearch

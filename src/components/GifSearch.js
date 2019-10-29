import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    keyword: "Search"
  }

  handleText = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  render() { 
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Gif Search: </label>
        <input onChange={this.handleText} type="text" name="keyword" value={this.state.keyword}></input>
        <input type="submit" value="Search"></input>
      </form>
    );
  }
}

export default GifSearch;
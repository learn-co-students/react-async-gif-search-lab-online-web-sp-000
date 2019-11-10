import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    term: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchGifs(this.state.term);
  }

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div className="row col col-md-offset-0 col-md-3">
        <h4>Search...</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="term" value={this.state.term} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

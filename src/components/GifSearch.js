import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <h1>Search for a Gif:</h1>
        <form onSubmit={this.props.submitAction}>
          <input type="text" value={this.props.queryTerm} onChange={this.props.changeAction}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

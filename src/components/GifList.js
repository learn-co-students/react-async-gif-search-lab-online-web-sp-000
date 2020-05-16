import React, { Component } from 'react';

export default class GifList extends Component{

  render() {
    return (
      <ul>
        {this.props.theThreeGifs.map(url => <li key={this.props.theThreeGifs.indexOf(url)}><img src={url} alt=""></img></li>)}
      </ul>
    )
  }
}

//<GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

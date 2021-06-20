import React, { Component } from 'react'

// <GifList /> is a presentational component. It receives data 
// from its props and renders html given the input data. 
// It can render a top level <ul> with each gif as an <li>.

class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt="gif"/></li>)}
      </ul>
    )
  }
}

export default GifList
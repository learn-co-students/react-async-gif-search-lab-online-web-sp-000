import React, { Component } from 'react';

export default class GifList extends Component {
  renderGifs() {
    this.props.gifs.map(gif => {
      return <li><img src={gif.images.original.url} alt=''/></li>
    });
  }

  render() {
    return(
      <ul>
        {this.renderGifs()}
      </ul>
    );
  }
}

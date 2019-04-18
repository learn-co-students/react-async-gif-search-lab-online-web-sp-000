import React, { Component } from 'react'
export default class GifList extends Component {

  render() {
    return (
      <div>
      {this.props.gifs.map(gif => <img src={gif.url} />)}
      </div>
    );
  }
}

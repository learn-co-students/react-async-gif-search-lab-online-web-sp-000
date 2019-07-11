import React, { Component } from 'react';


class GifList from Component {
  render() {
    return (
      <div>
        {this.props.gifs.map(gif => <img src={gif.url} />)}
      </div>
    );
  }
}

export default GifList;

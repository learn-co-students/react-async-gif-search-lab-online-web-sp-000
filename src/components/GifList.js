import React, { Component } from 'react'

class GifList extends Component {

  render() {
    return (
      <ul>
        {this.props.urls.map(url => (<li><img src={url} alt="alt"/></li>))}
      </ul>
    )
  }
}

export default GifList;

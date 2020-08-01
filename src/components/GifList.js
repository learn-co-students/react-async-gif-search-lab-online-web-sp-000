import React, { Component } from 'react'

export class GifList extends Component {
  renderGifs = () => {
    return this.props.gifs.map(gif => (
      <li key={gif.id}>
        <iframe
          src={gif.embed_url}
          width='480'
          height='480'
          frameBorder='0'
          class='giphy-embed'
          allowFullScreen
        ></iframe>
      </li>
    ))
  }
  render () {
    return <ul>{this.renderGifs()}</ul>
  }
}

export default GifList

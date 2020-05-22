import React, { Component } from 'react'

export default class GifList extends Component {

  render(){
    const gifs = this.props.gifs.map(gif => (
      <li>
        <img src={gif.url} />
      </li>
    ))
    return (
      <div className="gif list">
        <ul>
          {gifs}
        </ul>
      </div>
    )
  }
}

import React from 'react'


export default class GifList extends React.Component {

    renderGifs = () => {
        return this.props.gifs.map(gifUrl => <li key={gifUrl}><img src={gifUrl}></img></li>)
    }

    render() {
      return (
        <ul>
            {this.renderGifs()}
        </ul>
      )
    }
  }
import React from 'react'

class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => (
          <li key={gif.id}><img src={gif.url} alt=""/></li>
        ))}
      </ul>
    )
  }
}

export default GifList

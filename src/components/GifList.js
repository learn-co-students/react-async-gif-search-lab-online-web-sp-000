import React from 'react'

class GifList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.gifs.map(singleGif => (
          <li>
            <img src={singleGif.images.original.url} key={singleGif.id} alt="gif" />
          </li>
        ))}
      </ul>
    )
  }
}

export default GifList
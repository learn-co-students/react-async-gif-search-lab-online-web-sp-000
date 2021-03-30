import React from 'react'

class GifList extends React.Component {

  renderGifList = () => {
    return this.props.gifs.map(gif =>
      <li key={gif.id}>
        <img src={gif.images.downsized.url} alt="img"/>
      </li>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderGifList()}
        </ul>
      </div>

    )
  }
}

export default GifList

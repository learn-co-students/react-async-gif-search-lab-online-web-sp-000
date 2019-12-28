import React from 'react';

class GifList extends React.Component {

  handleGifList = () => {
    console.log(this.props.gifs)
    return this.props.gifs.map(gif =>
      <img src={gif.images.original.url} alt="gif"></img>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.handleGifList()}
        </ul>
      </div>
    )
  }
}

export default GifList;
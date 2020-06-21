import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return (
            <div className="gif">
              <img src={gif.images.original.url} alt="Gif" />
            </div>
          )
        })
        }
      </div>
    )
  }

}

export default GifList

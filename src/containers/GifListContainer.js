import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs} /><br/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  getGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map(
            gif => ({
              id: gif.id,
              url: gif.images.original.url
            })
          )
        })
      })
  }
}

export default GifListContainer

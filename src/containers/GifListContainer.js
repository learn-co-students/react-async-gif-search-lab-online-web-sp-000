import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  fetchImages = (query = "birds") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) )})
      })
  }

  componentDidMount() {
    this.fetchImages()
  }

  render() {
    return(
      <div>
        <GifSearch fetchImages={this.fetchImages} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
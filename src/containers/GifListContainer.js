import React, { Component } from 'react';

import GifSearch from '../components/GifSearch.js';
import GifList from '../components/GifList.js'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFS={this.fetchGIFS} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFS = (query = "why would someone do that") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGIFS()
  }

}

export default GifListContainer

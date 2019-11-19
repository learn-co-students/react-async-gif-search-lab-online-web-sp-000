import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


 class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => this.setState({
        gifs: json.data.slice(0, 3)
      })
    )
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer

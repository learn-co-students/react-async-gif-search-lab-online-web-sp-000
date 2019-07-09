import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    items: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchItems} />
        <GifList gifs={this.state.items} />
      </div>
    )
  }

  fetchItems = (query = this.state.value) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`).then(res => res.json()).then(({data}) => {
        this.setState({items: data.map(gif => ({ url: gif.images.original.url }))})
      })
  }

  componentDidMount() {
    this.fetchItems()
  }
}

export default GifListContainer
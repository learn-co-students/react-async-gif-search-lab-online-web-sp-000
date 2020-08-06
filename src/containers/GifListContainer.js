import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }
  
  componentDidMount() {
    this.fetchGif
  }

  fetchGif = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=z4AIh6v0xo3t2FNQmOE6kOhp6ZSZnUly&rating=g`)
    .then(res => res.json())
    .then(gifs => {
      this.setState({
        gifs: gifs.data.map(gif => ({url: gif.images.original.url}))
      })
      console.log(this.state.gifs)
    })
  }
  
  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch callback={this.fetchGif}/>
      </div>
    )
  }
}
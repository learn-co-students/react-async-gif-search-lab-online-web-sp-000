import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'



export default class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }

  }

  fetchGifs = (query = "redpanda") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${
      query}&api_key=yxIM349bDgYW9seG0fgPj51M7bHmZLj2&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({
        gifs: data.slice(0,4).map( gif => ({ url: gif.images.original.url }) )
      })
    })
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return (
    <div>
      <GifSearch onFindGiphysClick={this.fetchGifs}/>
      <GifList gifs={this.state.gifs}/>
    </div>
  )
  }
}

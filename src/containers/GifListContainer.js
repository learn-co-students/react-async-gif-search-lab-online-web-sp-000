import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export class GifListContainer extends Component {
  state = {
    query: 'cats',
    gifs: []
  }

  componentDidMount () {
    this.getGifs()
  }

  handleSubmit = q => {
    this.setState({ query: q })
    this.getGifs(q)
  }

  getGifs = (q = this.state.query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(json => {
        let arr = json.data.slice(0, 3)
        this.setState({ gifs: arr })
        console.log(this.state.gifs)
      })
  }

  render () {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer

import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifList: []
  }

  searchGif = (term) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          gifList: data.data.slice(0, 3)
        })
      })
  }

  render() {
    
    return (
      <div>
        <div><GifSearch searchGif={this.searchGif}/></div>
        <div><GifList gifs={this.state.gifList}/></div>
      </div>
    )
  }
}
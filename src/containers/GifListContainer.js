import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    this.makeGifSearchRequest()
  }

  makeGifSearchRequest = (mySearchTerm = 'random') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${mySearchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        gifs: resp.data.slice(0, 3)
      })
    })
  }

  handleSubmit = (e, mySubmitTerm) => {
    e.preventDefault();
    this.makeGifSearchRequest(mySubmitTerm.searchTerm);
  }

  render() {
    return (
      <div>
        <div>
          <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
        <div>
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

export default GifListContainer

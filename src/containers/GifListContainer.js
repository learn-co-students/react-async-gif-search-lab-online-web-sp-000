import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "random",
      gifs: []
    }
  }

  componentDidMount() {
    this.makeGifSearchRequest()
  }

  makeGifSearchRequest = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        gifs: resp.data.slice(0, 3)
      })
    })
  }

  handleSubmit = (event) => {
    // TODO: take the event's target value and add it to the search term
    console.log('Submit action!')
  }

  render() {
    return (
      // <div>
      //   <GifSearch submitFunction={this.handleSubmit}/>
      // </div>
      <div>
        <div>
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

export default GifListContainer

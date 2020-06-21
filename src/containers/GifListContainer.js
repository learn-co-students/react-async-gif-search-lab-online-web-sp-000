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

  handleSubmit = (e, mySubmitTerm) => {
    console.log(mySubmitTerm.searchTerm);
    e.preventDefault();
    this.setState({
      searchTerm: mySubmitTerm.searchTerm
    });
  }

  componentDidUpdate() {
    this.makeGifSearchRequest()
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

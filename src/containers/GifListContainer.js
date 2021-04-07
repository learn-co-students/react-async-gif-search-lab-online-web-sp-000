import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {

  state = {
      gifs: [],
      searchWord: ''
  }

  render() {
      console.log(this.state.searchWord)
      
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} handleSearch={this.handleSearch} parentState={this.state} handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
  handleSearch = event => {
    this.setState({
      searchWord: event.target.value
    })
  }

  handleSubmit = event => {
      event.preventDefault()
      this.fetchGifs()
  }

fetchGifs = () => {
    let saving;
    let link = 'https://api.giphy.com/v1/gifs/search?q=' + this.state.searchWord + '&api_key=dc6zaTOxFJmzC&rating=g';

    fetch(link)
      .then(response => response.json())
      .then(data => {
        saving = data.data.slice(0, 3)
        let final = saving.map(key => key.images.original.url)
        return this.setState({gifs: final})
});
}
componentDidMount() {
this.fetchGifs()

}
  

}

export default GifListContainer
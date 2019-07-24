import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      gifs: [],
    };
  }

  grabSearch = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      let dataArray = data.data.slice(0, 3)
      console.log(searchTerm)
      this.sendtoState(dataArray)
    })
  }

  sendtoState = (array) => {
    this.setState({
      gifs: array
    })
  }

  render () {
    return (
      <div>
        <GifSearch sendSearchTerm={this.grabSearch}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

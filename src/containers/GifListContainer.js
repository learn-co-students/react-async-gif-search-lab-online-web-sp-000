import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  getGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => this.setState({
        gifs: json.data.slice(0, 3)
      }))
  }

  handleSubmit = query => event => {
    event.preventDefault()
    this.getGifs(query)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <GifList gifs={this.state.gifs} />
          <GifSearch submit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default GifListContainer;
import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  render() {
    return (
      <div>
          <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
          <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  handleSearchSubmit = query => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=JGstxrwfboHnNoYOP04rYgCSUEPEL1Ym&rating=g`)
      .then(response => response.json())
      .then(json => {
          this.setState({gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)})
      })
  }
}

export default GifListContainer;
import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

  state = {
    gifs: null,
    searchTerm: null
  }

  searchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: [data[0]['original']['url'], data[1]['original']['url'], data[2]['original']['url']]
      })
    })
  }

  onSearchSubmit = (str) => {
    this.setState({
      searchTerm: str
    }, this.searchGifs)
  }

  render() {
    return (
      <div>
        <GifSearch sendQuery={this.onSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
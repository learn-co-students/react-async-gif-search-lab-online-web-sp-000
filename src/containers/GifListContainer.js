import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = { gifs: [] };
  };

  fetchGIFs = (query = '') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(gifs => {this.setState({ gifs: gifs.data })});
  };

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  };

  componentDidMount() {
    this.fetchGIFs();
  };
};
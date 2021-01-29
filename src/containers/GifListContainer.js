import React, { Component } from 'react';
import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  state = {
    gifs: []
  };

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={ this.fetchGIFs } />
        <GifList gifs={ this.state.gifs } />
      </div>
    );
  }

  fetchGIFs = (query = 'dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${ query }&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url }))
        });
      });
  }

  componentDidMount() {
    this.fetchGIFs();
  }
}
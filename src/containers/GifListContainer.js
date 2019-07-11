import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGifs = (query = 'dolphins') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => json())
    .then(((data) => {
      this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})}))
  }

  componentDidMount() {
    this.fetchGifs()
  }
}

export default GifListContainer;

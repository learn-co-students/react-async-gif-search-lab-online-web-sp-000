import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render(){
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = 'pug gifs') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=evAxAFFZ3qfofGLcpUbfSreyXg8oaDQ4&rating=g&limit=20`)
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }))})
      })
  }

  componentDidMount(){
    this.fetchGIFs()
  }
}
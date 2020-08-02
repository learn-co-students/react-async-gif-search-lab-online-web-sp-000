import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  state = { data: [] };

  fetchGifs = (userInput) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=wHQpyHBLL8TiIcnypqePIv6IuUK6ZNHK&rating=g`)
      .then(response => response.json())
      .then(json => 
        this.setState({ data: json.data.slice(0, 3) })
      );
  }
  
  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifData={this.state.data} />
      </div>
    )
  }
}
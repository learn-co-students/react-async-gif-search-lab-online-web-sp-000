import React from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

export default class GifListContainer extends React.Component {
  state = {
    topGifs: []
  }

  render(){
    return (
      <div>
        <GifList topGifs={this.state.topGifs} />
        <GifSearch fetchGifs={this.fetchGifs}/>
      </div>
    )
  }

  fetchGifs = (query = 'dogs') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          topGifs: data.map(gif => ({url: gif.images.original.url}))
        })
      })
  }

  componentDidMount() {
    this.fetchGifs();
  }
}

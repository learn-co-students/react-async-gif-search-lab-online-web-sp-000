import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GiftListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGifs() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(res => res.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map(g => g.images.original.url)
      })
    })
  } 

  componentDidMount() {
    this.fetchGifs()
  }

  render() { 
    return ( 
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
     );
  }
}
 
export default GiftListContainer;
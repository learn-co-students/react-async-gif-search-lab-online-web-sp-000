import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  
  state = {
    gifList: []
  }

  // api key: jOMtQ6RtYodYwdW619h4a3QVR7titjO0
  
  componentDidMount() {
    this.getGifList()
  }

  getGifList = (query = 'lebron james') => {
    fetch( `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jOMtQ6RtYodYwdW619h4a3QVR7titjO0` )
    .then(resp => resp.json())
      .then(({data}) => {

        this.setState({gifList: data.map( gif => ({ url: gif.images.original.url }) )})
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifList} />
        <GifSearch getGifList={this.getGifList} />
      </div>
    )
  }
}

export default GifListContainer;

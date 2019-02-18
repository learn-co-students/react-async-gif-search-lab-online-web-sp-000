import React, { Component } from 'react';
import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  getGifs = (search) =>{
    console.log("getgif",search)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(response => response.json())
    .then(({data}) =>{
      console.log("myjson data",data)

          this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })

      }

  render() {
    console.log("state", this.state.gifs)
    return (
      <div><GiftList result={this.state.gifs}/>
      <GifSearch getGifs={this.getGifs}/>
      </div>
    );
  }

}

export default GifListContainer;

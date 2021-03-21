import React, { Component } from 'react';

class GifListContainer extends Component {
  
  state = {
    gifList: []
  }

  // api key: jOMtQ6RtYodYwdW619h4a3QVR7titjO0
  
  componentDidMount() {
    this.getGifList()
  }

  getGifList(query = 'lebron james') {
    fetch( `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jOMtQ6RtYodYwdW619h4a3QVR7titjO0` )
    .then(resp => resp.json())
      .then((data) => {

        this.setState({gifList: data.map( gif => ({ url: gif.images.original.url }) )})
    })
  }
}

export default GifListContainer;

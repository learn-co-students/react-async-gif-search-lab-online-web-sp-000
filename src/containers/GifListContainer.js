import React, { Component } from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component {
 

  state = {
    lolGifs: []
  }
 
  render() {
    return (
     <div> 
      <GifSearch componentDidMount={this.componentDidMount} />  
    
        <GifList gifs={this.state.lolGifs} />
     </div>
    )
  }
 
  componentDidMount = (q) => {
   fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          lolGifs: data.map( gif => ({ url: gif.images.original.url })) 
        })

      })
  }

}

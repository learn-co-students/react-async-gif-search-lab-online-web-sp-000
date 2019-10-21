import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifArray: []
  }
  //


  handleGifSubmit = (query) => {
   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
     .then(res => res.json())
     .then(gifData => {
       this.setState({ gifArray: gifData.data.map(gifObj => ({ link: gifObj.images.original.url}) ) })
     })
 }


  render() {
    return (
      <div>
        <GifSearch fetchGif={this.handleGifSubmit} />
        <GifList gifArray={this.state.gifArray}/>
      </div>
    )
  }


}


export default GifListContainer

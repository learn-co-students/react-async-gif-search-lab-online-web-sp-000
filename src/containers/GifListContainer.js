import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
   state = {
      data: []
   }

   render() {
      return (
         <div>
            <GifList data={this.state.data}  />
            <GifSearch handleOnSubmit={this.handleSubmit} />
         </div>
      )
   }

   componentDidMount() {
      const gifDataUrl = 'https://api.giphy.com/v1/gifs/' +
         'search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
      fetch(gifDataUrl)
         .then(res => res.json())
         .then(gifs => {
            this.setState({
               data: [gifs.data[0], 
                      gifs.data[1], 
                      gifs.data[2]]
            })
         })

   }
}

export default GifListContainer






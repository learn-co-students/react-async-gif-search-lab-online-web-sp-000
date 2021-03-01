import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
   state = {
      data: []
   }

   componentDidMount() {
      this.fetchGifs()
   }

   handleSubmit = (event, value) => {
      event.preventDefault()
      this.queryGif(value)
      // this.fetchGifs()
   }

   queryGif = value => {
      const gifDataUrl = `https://api.giphy.com/v1/gifs/` +
      `search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(gifDataUrl)
         .then(res => res.json())
         .then(gif => {
            // debugger
            console.log(gif.data)
            this.setState({
               data: [gif.data[0], 
                      gif.data[1], 
                      gif.data[2]]
            })
         })
   }

   fetchGifs = () => {
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

   render() {
      return (
         <div>
            <GifSearch handleOnSubmit={this.handleSubmit} />
            <GifList data={this.state.data}  />
            {/* <GifSearch handleOnSubmit={this.handleSubmit} /> */}
         </div>
      )
   }
}

export default GifListContainer






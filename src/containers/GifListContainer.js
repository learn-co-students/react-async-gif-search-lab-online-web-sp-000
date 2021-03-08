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
       this.fetchGifs(value)
    }
 
    fetchGifs = (value) => {
       const gifDataUrl = `https://api.giphy.com/v1/gifs/` +
       `search?q=${value}&api_key=JockFEfYV8Q96c9zENBj3vzbXEGGexUk&rating=g`
 
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
          </div>
       )
    }
}
 
 export default GifListContainer

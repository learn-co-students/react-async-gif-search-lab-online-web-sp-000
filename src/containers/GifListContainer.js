import React, { Component } from "react";
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
   constructor(){
       super()
       this.state = {
           gifs: []
       }
   }

   submitHandler = (event) =>{
       fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g`)
       .then(response => response.json)
       .then(img => {
           this.setState({
               gifs: img.data.map(i => i.images.original.url).slice(0,3)
           })
       })
   }

   render(){
       return(
           <div>
           <GifList gifs={this.state.gifs} />
           <GifSearch submitHandler={this.submitHandler} />
           </div>
       )
   }

    

    
}
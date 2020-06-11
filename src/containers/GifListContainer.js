import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
class GifListContainer extends Component {
   state = {  
      gifs: [],
      searchTerm: ""
   }

   executeSearch = (searchStr) => {
      const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(giphyUrl)
         .then(resp => resp.json())
         .then(gifData => {
            this.setState({ 
               gifs: gifData.data.slice(0, 3) 
            })
         })
   }

   render() {
      console.log(this.state) 
      return (  
         <div>
            <GifSearch executeSearch={this.executeSearch} searchTerm={this.state.searchTerm}/> <br/>
            <GifList gifs={this.state.gifs}/>
         </div>  
      );
   }
}
 
export default GifListContainer;
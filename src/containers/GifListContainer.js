import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
     gifs: [],
     searchTerm: ''
   }

   fetchGifs = () => {
     fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
       .then(response => response.json())
       .then(data => {
         this.setState({
           gifs: [data.data[0], data.data[1], data.data[2]]
         })
       })
   }

  handleSubmit = (str) => {
    this.setState({
      searchTerm: str
    }, this.fetchGifs)
  }



  render() {
   return (
     <div>
       <GifSearch handleSubmit={this.handleSubmit} />
       <GifList gifs={this.state.gifs} />
     </div>
   )
 }

}

export default GifListContainer

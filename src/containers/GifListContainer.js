import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

//  the <GifListContainer /> will be responsible for fetching 
// the data from the Giphy API, storing the first 3 gifs from 
// the response in its component state, and passing that data 
// down to its child, the <GifList> component, as a prop.
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  // It will also render a <GifSearch /> component that 
  // renders the form. 

  // <GifListContainer /> should pass down a submit handler
  //  function to <GifSearch /> as a prop.
  fetchGifs = (term) => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8w7oPHCJgwHO14SigUuBCYyGlpecBiou&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.images.original.url
          // Need just the first 3:
          // .slice(0,3)?
        })
      })
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }
  
}

export default GifListContainer
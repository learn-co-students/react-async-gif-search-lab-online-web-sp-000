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
    // this.fetchGifs()
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8w7oPHCJgwHO14SigUuBCYyGlpecBiou&rating=g')
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: json.data.slice(0,3)
        })
      })
  }

  // It will also render a <GifSearch /> component that 
  // renders the form. 

  // <GifListContainer /> should pass down a submit handler
  //  function to <GifSearch /> as a prop.
  fetchGifs = (searchTerm) => {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8w7oPHCJgwHO14SigUuBCYyGlpecBiou&rating=g')
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: json.data.slice(0,3)
        })
      })
  }

  render() {
    return (
      <div>
        < GifSearch fetchGifs={this.fetchGifs} />
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
  
}

export default GifListContainer
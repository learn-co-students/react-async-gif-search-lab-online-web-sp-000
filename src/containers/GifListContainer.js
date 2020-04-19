import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {
    state = {
      gifs : []
    }
  
    componentDidMount() {
      fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=I3tCKjeIdVn4eMPyHCf97bsAicM6Y5p5&rating=g&limit=3') 
      .then(response => response.json())
      .then(({gifs}) => {
          console.log(gifs)
      })
    }
  
    render() {
      return (
        <div>
           <GifSearch />
           <GifList />
        </div>
      )
    }
  
  }
  
  export default GifListContainer
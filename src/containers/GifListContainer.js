import React, {Component} from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

class GifListContainer extends Component {

  constructor(props) {
    super(props)
      this.state = {
      gifs: []
    }
  }

  searchGifs = (event, search) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map(gif => gif.images.original.url)
        })
    })
  }



  render(){
    return(
      <div>
        <GifSearch searchGifs={this.searchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }


}

export default GifListContainer;

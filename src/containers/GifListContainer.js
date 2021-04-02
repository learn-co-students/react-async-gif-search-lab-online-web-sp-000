import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  fetchGifs = (input = "dog") => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oWm8WpHtcvmeewZZYh5Lf0iH0RwT0CbH&q=${input}&limit=25&offset=0&rating=g&lang=en`
    fetch(url)
    .then(r => r.json())
    .then(gifs => {
      const firstThreeGifs = gifs.data.slice(0,3)
      this.setState({
        gifs: firstThreeGifs.map(gif => ({ id: gif.id, url: gif.images.original.url }) )
      })
  })
}

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetch={this.fetchGifs}/>
      </div>
    )
  }

  componentDidMount() { this.fetchGifs() }

}

export default GifListContainer

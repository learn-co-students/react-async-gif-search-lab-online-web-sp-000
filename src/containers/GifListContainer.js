import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  
  fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=PgSGV2iL4kyOQkRlqJQ5CaSZm8PVqDkj&rating=g`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: [data[0].images.original.url, data[1].images.original.url, data[2].images.original.url] })
      })
  }


  componentDidMount(){
    this.fetchGIFs()
  }


  render(){
    return(
      <div>
      <GifSearch fetchGIFs={this.fetchGIFs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}

export default GifListContainer





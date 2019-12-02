import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    urls: []
  }
 
  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
        <GifList urls={this.state.urls}/>
      </div>
    )
  }



  fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=FWGMLrb1K7mqbec6V0Qmxvo4IAUJ83JL&rating=g`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          urls: json.data.slice(0, 3).map(data => data.images.original.url)
        })
      })
  }
 
  componentDidMount() {
    this.fetchGIFs()
  }
}
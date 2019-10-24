import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.PureComponent {

  constructor() {
    super()
    this.state = {
      gifs: [
        "https://miro.medium.com/max/540/0*DqHGYPBA-ANwsma2.gif",
        "https://miro.medium.com/max/540/0*DqHGYPBA-ANwsma2.gif"
      ]
    }
  }

  handleSearch = (event) => {
    event.preventDefault()
    event.persist()
    let query = event.target.value
    let urls = this.state.gifs
    if (query.length >= 3) {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => {
        urls = data.data.map(x => x.images.original.url)
        this.updateUrls(urls)
      })
    }
  }

  updateUrls = (urls) => {
    this.setState({
      gifs: urls
      })
  }


  render() {
    return(
      <div>
        <div id="gif-search">
          < GifSearch handleSearch={this.handleSearch} query={this.state.query} />
        </div>
        <div id="gif-list">
          < GifList gifs={this.state.gifs} key={Math.random()*1000} />
        </div>
      </div>
    )
  }
}

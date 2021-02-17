
import React from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      gifs: []
    }
  }
  submitHandler = (query) => {
      let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=TSsbDCffaS2PUx1oSQBTJ8aQFGWK0k6z&rating=g`
      fetch(url)
      .then(r => r.json())
      .then(d => {
          this.setState({
              gifs: d.data.slice(0, 3)
          })
      })
  }

  render () {
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

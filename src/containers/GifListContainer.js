import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  submitHandler = (event, input) => {
    event.preventDefault()
    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(r => r.json())
    .then(gifs => {
      const firstThreeGifs = gifs.data.slice(0,3)
      this.setState({
        gifs: firstThreeGifs
      })
    })

  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(r => r.json())
    .then(gifs => {
      const firstThreeGifs = gifs.data.slice(0,3)
      this.setState({
        gifs: firstThreeGifs
      })
    })
  }
}

export default GifListContainer

import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"
class GifListContainer extends React.Component {
  state = { gifs: [] }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (query = "cats") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5H8Xs3uakSjg0eOZVIRP65ukwWSBgURQ&rating=g&limit=25`
    )
      .then(res => res.json())

      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url }))
        })
      })
  }
  componentDidMount() {
    this.fetchGifs()
  }
}

// .then(gifs => this.setState({ gifs }))

export default GifListContainer

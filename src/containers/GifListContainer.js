import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends React.Component {

  state = {
    gifs: []
  }
  render() {
    return (
      <div>
        <GifSearch submitHandler={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  handleSearchSubmit = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=0AJYYnyvyKHCcTHsQtNoSOkUjT9VfxDK&rating=g`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          gifs: resp.data.slice(0, 3)
        })
      })
  }
}

export default GifListContainer
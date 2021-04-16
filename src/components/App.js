import React from 'react'

import NavBar from './NavBar'
import GifList from './GifList'
import GifSearch from './GifSearch'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

class App extends React.Component {

  state = { gifArray: [] }

  onSearchSubmit = (gifSearch) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({
          gifArray: data.map(gif => ({ url: gif.images.original.url}))
        })
      })
      .catch(err => console.log(err))
      console.log(this.state)
  }

  render() {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifList gifImages={this.state.gifArray}/>
          < GifSearch onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App

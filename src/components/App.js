import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
const API_KEY = "7dx39prwJ0aFncNE47jPSG5YFGMaP5ib";
const URL_BASE = "https://api.giphy.com/v1/gifs/";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "puppies"
    }
  }

  render () {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer apiKey={API_KEY} urlBase={URL_BASE} />
      </div>
    )
  }
}

export default App

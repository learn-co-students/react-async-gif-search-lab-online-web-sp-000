import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component
import GifListContainer from '../containers/GifListContainer'

const API_KEY = "dc6zaTOxFJmzC&";
const URL_BASE = "https://api.giphy.com/v1/gifs/";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "corgis"
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

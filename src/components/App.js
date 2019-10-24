import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <div id="navbar">
        < NavBar color='black' title="Giphy Search" />
      </div>
      <div id="gif-list-container">
        < GifListContainer />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
        <GifSearch />
    </div>
  )
}

export default App

import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '/home/educhin/Flatiron/React/section_08/react-async-gif-search-lab-online-web-sp-000/src/containers/GifListContainer.js'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App

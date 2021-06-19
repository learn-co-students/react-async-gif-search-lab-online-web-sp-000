import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
import GifListContainer from '../containers/GifListContainer'

// My key: 8w7oPHCJgwHO14SigUuBCYyGlpecBiou
const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App

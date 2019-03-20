import React from 'react'
import NavBar from './NavBar'
import GiftListContainer from '../containers/GifListContainer';

// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GiftListContainer />
    </div>
  )
}

export default App

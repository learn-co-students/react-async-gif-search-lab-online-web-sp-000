import React from 'react'

//components
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

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


// api key: MOFVQi1OIzlq2jI7P33xJIuqRAh2dgr2


// gives back an array of objects in the browser 

// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=MOFVQi1OIzlq2jI7P33xJIuqRAh2dgr2&rating=g 
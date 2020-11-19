import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


const API_KEY = "3EOmLPaqyhL20VzhVb61qXNyZA5iYtHX"
// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <div>
        < GifListContainer apiKey={API_KEY}/>        
        </div>
    </div>
  )
}

export default App

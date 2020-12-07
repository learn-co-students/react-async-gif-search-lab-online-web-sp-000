import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer.js'

const App = () => {
  return (
    <React.Fragment>
      <div>
          < NavBar color='black' title="Giphy Search" />
      </div>
      <div>
        <GifListContainer />
      </div>
    </React.Fragment>
  )
}

export default App
import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends React.Component {
  render(){
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          <GifListContainer />
      </div>
    )
  };

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
  };
}

export default App

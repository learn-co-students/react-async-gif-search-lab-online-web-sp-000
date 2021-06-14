import React, { Component } from 'react';

import NavBar from './NavBar'
import GifList from './GifList'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 

class App extends Component {

  constructor(){
     super()
     this.state = {
       gifSearch: ""
     }
  }

  gifSearchHandler = (searchText) => {
    this.setState({
      gifSearch: searchText
    })
  }

  render(){
    return (
      <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch onSearch={this.gifSearchHandler}/>
        <GifList searchTerm={this.state.gifSearch}/>      
      </div>
    )
  }

}

export default App

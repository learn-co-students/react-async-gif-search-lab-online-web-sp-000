import React, { Component } from "react";

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
class App extends React.Component {
  const App = () => {
    render() {
      return (
        <div>
            < NavBar color='black' title="Giphy Search" />
          <GifListContainer />
        </div>
      );
    };
  }
}

export default App;

  
// react packages
import React from 'react'

// components:
import GifListContainer from '../containers/GifListContainer';
import NavBar from './NavBar'

const App = () => {
    return (
    <div>
        <NavBar color='black' title="Giphy Search" />

        <GifListContainer color='black' title="Giphy Search" />
    </div>
    )
}

export default App;

// Top Level Component:
// renders the <NavBar /> and <GifListContainer /> Components

// NOTE: this project has bootstrap loaded in

// Container Components:
// 'container' other Components. Usually aren't visibly on the page.

// Presentational components:
// you can visibly see on the page - like <Navbar />
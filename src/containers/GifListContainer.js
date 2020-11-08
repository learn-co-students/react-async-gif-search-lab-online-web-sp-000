import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component{

    state = {
        gifs: []
    }

    setGifs = gifs => {
        this.setState({gifs: gifs})
    }

    render(){
        return(<div>
            <GifSearch setGifs={this.setGifs}/>
            <GifList gifs={this.state.gifs}/>
        </div>)
    }
}

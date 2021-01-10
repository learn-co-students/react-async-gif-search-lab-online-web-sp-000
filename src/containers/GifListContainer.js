import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {


    state = {
        gifs: []
      }
     


    fetchGifs = (query='dolphin') => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=q1V30XHFTKR2bjVukF2y5dl2dyJ5rlHi&rating=g`)
        .then(response => response.json())
        .then(({data}) => {
            this.setState({ gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
        })   

    }  


    componentDidMount() {
        this.fetchGifs()
      }


    render() {
        return (
          <div>
            <GifSearch fetchGifs={this.fetchGifs}/>  
            <GifList gifs={this.state.gifs} />
          </div>
        )
      }

}

export default GifListContainer
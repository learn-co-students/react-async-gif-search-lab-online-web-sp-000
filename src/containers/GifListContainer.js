import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount(){
      this.fetchGifs()  
    }

    render(){
        return (<div>
            <GifSearch fetchGifs={this.fetchGifs}/>
            <GifList gifs={this.state.gifs}/>
            
        </div>)
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ABpCEdHN1cTackCocva8klT9M7LD426P&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => (<img src= {gif.images.original.url} alt='new' />) )})
        })
    }
}
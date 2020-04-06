import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }
    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
    
    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=F4F3ZBtgzrJAulpNRxxsVhUVfh35bc0C&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }
        
}
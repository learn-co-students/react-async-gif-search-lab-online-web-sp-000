import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFS = { this.fetchGIFS } />
                <GifList gifs = { this.state.gifs } />
            </div>
        )
    }

    fetchGIFS = ( query = this.fetchGIFS ) => {
        fetch("https://api.giphy.com/v1/gifs/search?q=${query}&api_key=s9jGaixHNkYGmSX6Q6ZlDjqKXRGwWZoi")
        .then(res => res.json())
        .then(({data}) => {
            console.log(data)
            this.setState({ gifs: data.map ( gif => ({ url: gif.images.original.url }) )} )
        })
    }

    componentDidMount() {
        this.fetchGIFS()
    }
}

export default GifListContainer
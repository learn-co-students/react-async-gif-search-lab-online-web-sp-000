import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} /><br />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGifs = (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        fetch(url)
            .then(response => response.json())
            .then(({ data }) => {
                this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url })) })
            }).catch(function (error) {
                alert('Not Found! ' + error)
            })
    }

    componentDidMount() {
        this.fetchGifs()
    }
}

export default GifListContainer

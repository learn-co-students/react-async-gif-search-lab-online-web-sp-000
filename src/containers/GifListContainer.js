import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }
    componentDidMount() {
        this.fetchGIFs()
    }

    fetchGIFs = (query = 'dolphin') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=klF3Ty5sPkMWIQDVG4nB89yWeYBlfQ7U&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    render() {
        return (
            <div>
                < GifList gifs={this.state.gifs} />
                < GifSearch fetchGIFs={this.fetchGIFs} />
            </div>
        )
    }
}
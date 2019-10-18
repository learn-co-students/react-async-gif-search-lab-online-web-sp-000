import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    searchGifs = term => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    gifs: data.data.slice(0,3)
                });
            });
    };

    render() {
        return (
            <div>
                <GifSearch searchGifs={this.searchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
import React, { Component } from 'react';

import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
        <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifs} />
        </div>
        );
    }

    // fetchGifs = (query) => {
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=haZNPG4PJiohAREmjgc4x17oPAjGm4Y1&rating=g`)
    //     .then(resp => resp.json())
    //     .then({data} => {
    //         this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    //     })
    // }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=haZNPG4PJiohAREmjgc4x17oPAjGm4Y1&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

}

export default GifListContainer;

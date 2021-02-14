import React, { Component } from 'react';
import GifSearch from '../components/GifSearch.js';
import GifList from '../components/GifList.js';

export default class GifListContainer extends React.Component {
    state = {gifs: []}

    fetchGifs = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => this.setState({gifs: json.data}))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchGifs(e.target.search.value);
    }

    render(){
        return (
            <div>
                < GifSearch onSubmit={this.handleSubmit} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
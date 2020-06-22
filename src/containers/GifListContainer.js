import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GiftListContainer extends React.Component {
    state = {
        gifUrls: []
    }
    
    formatJson = (json) => {
        this.setState({
            gifUrls: json.data.slice(0, 3).map(gif => gif.images.original.url)
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let searchTerm = event.target.value;
        let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(response => response.json())
        .then(json => this.formatJson(json))
        .catch(error => alert(error.message));
        // console.log(json.data.slice(0, 3).map(gif => gif.images.original.url));
    }
      
    render () {
        console.log(this.state.gifUrls);
        return (
            <div>
                < GifList gifUrls={this.state.gifUrls} />
                < GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
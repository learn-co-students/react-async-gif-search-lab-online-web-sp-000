import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render(){
        return(
            <div>
                <GifSearch fetchGIFS={this.fetchGIFS} />
                <GifList gifs = {this.state.gifs} /> 
            </div>
        )
    }

    fetchGIFS=(query) => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dog&api_key=xO3iOqmjxjVcD24hvzOVIyTr266uWKRp&rating=g')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({gifs: data.map( gif => ({url: gif.images.original.url}) ) })
        })
    }

    componentDidMount(){
        this.fetchGIFS()
    }

}
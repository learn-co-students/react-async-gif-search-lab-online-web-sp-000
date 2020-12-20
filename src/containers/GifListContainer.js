import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=lJ1GST9FxmrLign6Z0sMWjYATHVX1SXH&rating=g')
        .then(resp => resp.json())
        .then(info => this.setState({
            photos: [...info.data.slice(0, 3)]
        }))
        .then(console.log(this.state))
    };

    searchFunction = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lJ1GST9FxmrLign6Z0sMWjYATHVX1SXH&rating=g`)
        .then(resp => resp.json())
        .then(info => this.setState({
            photos: info.data.slice(0, 3)
        }))
    }

    render() {
        return (
            <div>
                <GifList photos={this.state.photos} />
                <GifSearch search={this.searchFunction} />
            </div>
        )
    }
};

export default GifListContainer
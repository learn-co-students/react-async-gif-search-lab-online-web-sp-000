import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    fetchGifs = (query) => {
        fetch('https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g')
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
            })
    }

    componentDidMount(){
        this.fetchGifs();
    }

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;
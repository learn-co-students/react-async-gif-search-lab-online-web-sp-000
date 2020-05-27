import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            gifs: [] 
        }
    }

    handleSearch = (query) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
        .then(res => res.json())
        .then(data => {
            let allGifs = data.data.map(i => ({url: i.images.original.url}))
            let topThree = allGifs.slice(0, 3)
            this.setState ({
                gifs: topThree
            })
        })  
    }

    render() {
        return(
            <div>
                <GifSearch handleSearch={this.handleSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
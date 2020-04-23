import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }


    fetchGIFs = (query="dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=NtEmhmrSRlztM8Ak5PfpvEpaaNd6raSy&rating=g&limit=5`)
        .then(res => res.json())
        .then(({data}) => {
            console.log({data})
            this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

}

export default GifListContainer
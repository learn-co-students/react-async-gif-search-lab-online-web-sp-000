import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (searchTerm = "puppy") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(res => res.json())
            .then(gifs => {
                this.setState({
                    gifs: gifs.data.map(gif => ({
                        url: gif.images.original.url
                    }))
                })
            })
    }

    render() {
        return (
            <div>
                <GifSearch search={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer
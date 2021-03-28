
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetch={this.fetch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetch = (query = "drums") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=sZfnsy3qZ9EiUAt2w2TACYm8ysLH8Btw&rating=g&limit=3`)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url })) })
            })
    }

    componentDidMount() {
        this.fetch()
    }
}

export default GifListContainer;
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }
    render () {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGifs = (query = 'dolphins') => {
        fetch('iGllWR5Qkf7XyarPOxU81kvX8IH8MVEk')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})
        })
 
    }

    componentDidMount() {
        this.fetchGifs()
    }
}

export default GifListContainer
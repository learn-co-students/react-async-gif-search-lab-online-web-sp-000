import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    //start here
    //In our app, the <GifListContainer /> will be responsible for fetching the data from the giphy API,
    //storing the first 3 gifs from the response in its component state, and passing that data down to its
    //child, the <GifList> component, as a prop.

    state = {
        gifs: []
    }
    
    //It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass
    //down a submit handler function to <GifSearch /> as a prop.
    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(({data}) => {
                this.setState({ gifs: data.map(gif => ({url: gif.images.original.url}) ) })
        })
    }
    
    componentDidMount() {
        this.fetchGifs()
    }
}

export default GifListContainer
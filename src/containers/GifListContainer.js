import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    fetchGIFs = (query = `${query}`) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=yE1ohN7gW8kYQ5Xkb23G0QJKbM8MYaQn`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }))})
            }) 
    }

    render() {
        return(
            <div>
                < GifSearch fetchGIFs={this.fetchGIFs} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

}
export default GifListContainer
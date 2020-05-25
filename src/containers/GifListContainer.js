import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: [],
        searchQuery: ""
    }

    render() {
        return (
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
    fetchGifs = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(info => {
                let gifsDisplayed = (info.data.map(dat => {
                    return dat.images.original.url
                }))

                this.setState({
                    gifs: [gifsDisplayed[0], gifsDisplayed[1], gifsDisplayed[2]]
                })

            })

    }

    componentDidMount(){
        this.fetchGifs()
    }

}
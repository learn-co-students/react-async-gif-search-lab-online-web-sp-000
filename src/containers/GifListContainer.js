import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            gifList: []
        }
    }

    componentDidMount() {
        this.getGifs()
    }

    getGifs = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            gifList: data.data.map(gif => gif.images.original.url)
          })
        })
    }

    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <GifList gifs={this.state.gifList}/>
            </div>
        )
    }
}

export default GifListContainer
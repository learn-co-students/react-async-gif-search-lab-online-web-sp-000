import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    handleSearchTerm = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=TWwT7QVIkhsZEcIToc0DfLdSgFay4l8m`)
        .then(resp => resp.json())
        .then(gifs => {
            const threeArr = gifs.data.slice(0, 3)
            const gifData = []
            for (let gif of threeArr) {
                gifData.push({
                    id: gif.id,
                    title: gif.title,
                    url: gif.images.original.url
                })
            }
            this.setState({
                gifs: gifData
            })
        })
    }


    render() {
        return (
            <div>
                <GifSearch searchTerm={this.handleSearchTerm} />
                <GifList gifData={this.state.gifs} />
            </div>
        )
    }
}
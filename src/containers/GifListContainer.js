import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

require('dotenv').config();

export default class GifListContainer extends Component {

    state = {
            gifs: [],
            searchParam: '',
            limit: 3
        }

    handleData = (data) => {
        data.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchParam}&api_key=${process.env.REACT_APP_API_KEY}&rating=g&limit=${this.state.limit}`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))
        })
    })
}

    handleSearchParam = event => {
        this.setState({
            searchParam: event.target.value
        })
    }

    render () {
        return (
            <div>
                <GifSearch 
                    handleSearchParam={this.handleSearchParam}
                    searchParam={this.state.searchParam}
                    handleData={this.handleData}
                />
                <GifList 
                    gifs={this.state.gifs}
                />
            </div>
        )
    }
}


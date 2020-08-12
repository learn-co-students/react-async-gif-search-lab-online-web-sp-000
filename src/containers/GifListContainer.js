import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    submitHandler = (query = "dolphin") => {
        this.fetchGifs()
    }

    render () {
        return (
            <div><GifList gifUrl={this.state.gifs}/><GifSearch submitHandler={this.submitHandler} /></div>
        )
    }

    fetchGifs() {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.map(gifs => gifs.images.original.url)
            })
        })
    }



}
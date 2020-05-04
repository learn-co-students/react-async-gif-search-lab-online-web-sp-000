import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
            imageArray: []
        }

    componentDidMount() {
        this.fetchImages()
    }

    fetchImages = (query = 'charlie always sunny') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=88Jryw8D7CgYjmtFKG6OoqBKu0oUVFVD&rating=g`)
        .then(response => response.json())
        .then (({data}) => {
            this.setState({
                imageArray: data.slice(0, 3)
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch fetchImages={this.fetchImages} />
                <br></br>
                <GifList imageArray={this.state.imageArray} />
            </div>
        )
    }
}
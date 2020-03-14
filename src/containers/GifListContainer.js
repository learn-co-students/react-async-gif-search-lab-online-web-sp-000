import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            fetchURL: 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g',
            url: []
        }
    }

    componentDidMount() {
        fetch(this.state.fetchURL)
        .then(resp => resp.json())
        .then(obj => {
            let holder = []
            for(let i = 0; i < 3; i++) {
                holder.push(obj.data[i].images.original.url)
            }
            this.setState({
                url: holder
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            fetchURL: `https://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=dc6zaTOxFJmzC&rating=g`
        })
    }

    render() {
        return(
            <div>
                <GifList imgURL={this.state.url}/>
                <GifSearch searchSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
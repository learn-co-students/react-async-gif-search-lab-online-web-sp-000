import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidUpdate() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: json.data
                })
            })
    }

    handleSubmit = event => {
        event.preventDefault()
        let query = event.target.children[0].value
        this.setState({
            query: query
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
            
        )
    }
}
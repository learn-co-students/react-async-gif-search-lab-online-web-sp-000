import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

let giphyUrl = "https://api.giphy.com/v1/gifs/search?"
let giphyApiKey = "CrOeQY9n3gYFn7rtEtEfkAppSWmGjLQ0&"

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    componentDidUpdate() {

        console.log("Good job your search worked!")
    }

    fetchGifs = (term) => {
        fetch(`${giphyUrl}q=${term}&api_key=${giphyApiKey}&limit=25&offset=0&rating=g&lang=en`)
            .then(resp => resp.json())
            .then(data => this.setState({
                 gifs: data.data.slice(0, 3),
                    ...this.state.searchTerm
                }))
    }

    submitHandler = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    render() {
        return (
            <React.Fragment>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} />
            </React.Fragment>
        )
    }
}

export default GifListContainer
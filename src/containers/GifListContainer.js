import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            gifs: []
        }
    }

    setGifs = (gifs) => {
        this.setState({
            gifs: gifs
        })
    }

    // componentDidMount() {
    //     let endpoint = 'https://api.giphy.com/v1/gifs/search?q=money&api_key=dc6zaTOxFJmzC&rating=g'
    //     fetch(endpoint)
    //     .then(response => response.json())
    //     .then(obj => this.handleData(obj.data))
    //     .catch(error => console.log(error))
    // }

    handleData = (arr) => {
        let urls = []

        for (let i = 0; i < 3; i++) {
            urls.push(arr[i].images.original.url)
        }
        this.setGifs(urls)
    }

    submitHandler = (event) => {
        event.preventDefault()
        let savedTarget = event.target 
        console.log()
        let endpoint = `https://api.giphy.com/v1/gifs/search?q=${savedTarget[0].value}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(endpoint)
        .then(response => response.json())
        .then(obj => this.handleData(obj.data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer
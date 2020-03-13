import React, { Component } from "react";

import GifList from '../components/GifList'
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component{

    state = {
        gifs: []
    }

    fetchGIFS = (searchTerm = 'Dog') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            console.log(json.data)
            if (json.data) {
                this.setState({
                    gifs: json.data
                })
            }
        })
    }

    componentDidMount() {
        this.fetchGIFS()
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGIFS={this.fetchGIFS}/>
            </div>
        )
    }
}

export default GifListContainer
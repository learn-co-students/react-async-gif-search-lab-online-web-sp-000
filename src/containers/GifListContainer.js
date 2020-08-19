import React, {Component} from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'

let apiUrl = "https://api.giphy.com/v1/gifs/search?"
let apiKey = "wvVEN4NhG6DA7FTyplDGN6prmZRnPlDJ"

export default class GifListContainer extends Component { 

    state = {
        gifs: [],
        queryString: ""
    }

    handleSearch = (e) => {
        e.preventDefault()
        let thisUrl = apiUrl + `q=${this.state.queryString}` + `&api_key=${apiKey}` + "&rating=g"
        fetch(thisUrl)
            .then(res => res.json())
            .then(data => this.setState({
                gifs: data.data.slice(0, 3),
                ...this.state.queryString
            }))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <GifSearch queryData={this.state.queryString} handleChange={this.handleChange} onSearchSubmit={(e) => this.handleSearch(e)} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}
import React, { Component } from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = { top3: [] }
    }
    
    componentDidMount() {
        // fetch from Giphy API
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(resp => resp.json())
        .then(json => this.setState({
            top3: json.data.slice(0,3)
        }))
    }

    fetchGifs = (terms) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${terms}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.setState({
            top3: json.data.slice(0,3)
        }))
    }

    render() {
        return <div>
            < GifList gifs={this.state.top3}/>
            < GifSearch fetchGifs={this.fetchGifs}/>
        </div>
    }
}
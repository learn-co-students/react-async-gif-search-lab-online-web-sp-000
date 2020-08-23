import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
            url: [],
            input: ''
        }
    componentDidMount() {
        fetch(this.state.input)
        .then(response => response.json())
        .then(obj => console.log(obj))
    }
    userInput = (input) => {
        this.setState({
            input: `api.giphy.com/v1/gifs/search?q=${input}&api_key=rVFWPfThBDyF87UPtePKqmt9RIhpX8OY&rating=g`
        })
    }
    render() {
        return (
            <div>
                <GifSearch userInput={this.userInput}/>
                <GifList/>
            </div>
        )
    }
}

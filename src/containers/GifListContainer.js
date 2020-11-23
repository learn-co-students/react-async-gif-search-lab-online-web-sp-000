import React from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            terms: '',
            images: []
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let that = this;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.terms}&api_key=dHDTrjhs8HJxI8puq8Lkv9zOvkIMnHV5&rating=g`)
        .then(response => response.json())
        .then(json => 
            // console.log(json.data.map(gif => gif.images.original.url))
            { that.setState({
                images: json.data.map(gif => gif.images.original.url).slice(0,3)
            }) }
        )
    }

    // componentDidMount() {
    //     let that = this;

    //     fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dHDTrjhs8HJxI8puq8Lkv9zOvkIMnHV5&rating=g')
    //     .then(response => response.json())
    //     .then(json => 
    //         // console.log(json.data.map(gif => gif.images.original.url))
    //         { that.setState({
    //             images: json.data.map(gif => gif.images.original.url).slice(0,3)
    //         }) }
    //     )
    // }

    render() {
        return (
            <div className="container">
                <GifSearch terms={this.state.terms} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
                <GifList images={this.state.images}/>
            </div>
        )
    }
}

export default GifListContainer
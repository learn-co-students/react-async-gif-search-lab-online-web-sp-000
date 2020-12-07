import React, {Component} from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=qTtcFIBeligIFnF1UlOuyUaFxO93g4gB&rating=g`)
        .then(resp => resp.json())
        .then(object => {
            this.setState({
                images: object.data.map(el => el.images.original.url).slice(0, 3)
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <GifList images={this.state.images}/>
                <GifSearch submitHandler={this.submitHandler}/>
            </React.Fragment>
        )
    }
}
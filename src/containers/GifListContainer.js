import React from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends React.Component {

    // API_KEY = 'Gfzoy0RPytcIVlRJ2ZADgZQFZpDcTC1O';

    constructor() {
        super();
        this.state = {
            query: '',
            gifs: []
        }
    }

    submitHandler = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Gfzoy0RPytcIVlRJ2ZADgZQFZpDcTC1O&rating=g`)
        .then( resp => resp.json())
        .then( data => {
            let images = [];

            for (let i=0; i < 3; i++) {
                images.push(data.data[i].images.original.url)
            }

            this.setState({
                gifs: images,
                query: query
            })
        })
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
import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

    constructor(props) {
        super(props)
        // this.state = { text: "" }
        this.state = { gifs: [] }
    }

    handleSubmit(event) {
        // this.setState({
        //     text: event.target.value
        // })
        let text = event.target.value
        let url = 'https://api.giphy.com/v1/gifs/search?q='
        let api = '&api_key=dc6zaTOxFJmzC&rating=g'

        fetch(url + text + api)
        .then(res => res.json())
        .then(data => {
            let topThreeGifs = data.slice(0, 3)
            this.setState ({
                gifs: topThreeGifs.images.original.url
            })
        })  
    }

    render() {
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifsList={this.state.gifs} />
            </div>
        )
    }
}
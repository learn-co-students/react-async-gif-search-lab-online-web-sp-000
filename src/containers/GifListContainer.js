import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends Component {

    state = {
        gifs: []
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(g => this.setState({
                gifs: g.data.slice(0, 3)
            }))
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
    
}

export default GiftListContainer
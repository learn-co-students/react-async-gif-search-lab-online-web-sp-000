import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
export default class GifListContainer extends Component {
    state = {
        topThreeGifs = []
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.submitHander} />
                <GifList topThreeGifs={this.state.topThreeGifs} />
            </div>
        )
    }

    submitHander = event => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        let holderArray = []
        holderArray[0] = data[0]
        holderArray[1] = data[1]
        holderArray[2] = data[2]
        this.setState({
          topThreeGifs: holderArray
        })
      })
    }
}
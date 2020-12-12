import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             animals: [],
        }
    }

    handleSearchResults(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => {
          this.setState({
              animals: json.data.slice(0, 3)
          })
      });
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <div>
                <GifList animals={this.state.animals} />
                <GifSearch submitHandler={this.handleSubmit} />
            </div>
        )
    }
}

export default GifListContainer

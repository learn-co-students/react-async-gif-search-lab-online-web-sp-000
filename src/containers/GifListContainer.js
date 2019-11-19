import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount = () => {
        this.fetchGifs();
      }

      

// fetch the data from the giphy API, storing the first 3 gifs from the response in its component
// **state**, and passing that data down to its child, the `<GifList>` component, as
// a prop.

    fetchGifs = searchTerm => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0,3)
            })
        })
    
    }


    // render a `<GifSearch />` component that renders the form.
    // `<GifListContainer />` should pass down a submit handler function to `<GifSearch />`
     render() {
        return (
            <div>
                <GifSearch submitHandler={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

 

}

 
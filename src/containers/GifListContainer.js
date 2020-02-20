import React, { Component } from 'react';

import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
        <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifs} />
        </div>
        );
    }

    // fetchGifs = (query) => {
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=haZNPG4PJiohAREmjgc4x17oPAjGm4Y1&rating=g`)
    //     .then(resp => resp.json())
    //     .then({data} => {
    //         this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    //     })
    // }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=haZNPG4PJiohAREmjgc4x17oPAjGm4Y1&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

}

export default GifListContainer;

// this.setState({
//     gifs: data.map( gif => ({ url: gif.images.original.url }) )
// })

/*

The <GifListContainer /> will be responsible for fetching the data from the giphy API,
storing the first 3 gifs from the response in its component state,
and passing that data down to its child, the <GifList> component, as a prop.

It will also render a <GifSearch /> component that renders the form.

<GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

*/

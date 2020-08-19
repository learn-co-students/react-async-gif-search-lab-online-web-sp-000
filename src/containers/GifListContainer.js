import React from 'react'
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {

    state = {
        gifs: []
    };

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (searchTerm = "dogs") => {
        console.log(searchTerm);
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=qWFVf34RQQegbDza436YGEOQQ7wsC8Dc&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
            })
    };

    render() {
        return [
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        ]
    }
}

export default GifListContainer

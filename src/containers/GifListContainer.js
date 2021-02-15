import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return (
        <div>
            <GifList gifs={this.state.gifs}/>
            <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
        );
    }

    handleSubmit = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=Gztz8iJ2XpiGcMu0Ut4RIuk5qhYm3K6l`)
        .then(response => response.json())
        .then(data => {
            let sixGifs = data.data.slice(0, 3).map(data => data.url)
            console.log(sixGifs)
            this.setState({
                gifs: sixGifs
            })
            console.log(this.state.gifs)
        })
    }

}



export default GifListContainer;
import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
    }

    fetchGifs = (query) => {
        fetch('http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: [data[0]['original']['url'], data[1]['original']['url'], data[2]['original']['url']] 
            })
        })
    }


    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs ={this.state.gifs} />
            </div>

        )
    }

    componentDidMount(){
        this.fetchGifs();
    }
}
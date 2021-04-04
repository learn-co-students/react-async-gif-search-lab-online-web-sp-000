import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GiftListContainer extends React.Component {
    state = {
        gifs: [],
        searchTerm: "dolphin"
    }

    componentDidMount() {
       this.fetchGif()
    }
   
    fetchGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=KYzQlLq3oH2Lql9KTTZdKQSfgD1JexWs&rating=g`)
         .then(resp => resp.json())
         .then(json => {
             this.setState({
                 gifs: json.data
             })
         })
    }

    submitHandler = async term => {
        await this.setState({
            searchTerm: term
        })
        this.fetchGif()
    }

    render() {
        
        return (
            <div>
                <GifList firstThreeGifs={this.state.gifs.slice(0,3).map(gif => gif.images.original.url)} />
                <GifSearch onSubmit={this.submitHandler} />
            </div>
        )
    }
}
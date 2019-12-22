import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        firstThreeGifs: [],
        searchValue: ''
    }

    submitHandler = event => {
        event.preventDefault();

        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=m6BJQUjjdi0JtTsdXFpWDeqEQe5asscT&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                const gif1 = json.data[0].images.original.url;
                const gif2 = json.data[1].images.original.url;
                const gif3 = json.data[2].images.original.url;
                this.setState({
                    firstThreeGifs: [gif1, gif2, gif3]
                })
            })
    }

    changeHandler = event => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return(
            <div>
                < GifList firstThreeGifs={this.state.firstThreeGifs}/>
                < GifSearch submitHandler={this.submitHandler} changeHandler={this.changeHandler} searchValue={this.state.searchValue}/>
            </div>
        )
    }
}
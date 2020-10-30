import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: [],
        searchTerm: '',
    }

    onChangeTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFindGIFsClick = event => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(data => {
            console.log(data.data[0].images.original.url)
            let firstThree = []
            for (let i = 0; i < 3; i = i+1) {
                firstThree.push(data.data[i].images.original.url)
            }
            this.setState({
                gifs: firstThree
            })
          })
    }     

    render() {    
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch onFindGIFsClick={this.onFindGIFsClick} onChangeTerm={this.onChangeTerm} />
               {/* this.state.gifs.map(url => url) */}
            </div>
        );
    }   

}

export default GifListContainer;    
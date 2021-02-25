import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'



export default class GifListContainer extends Component {

state = {
    gifs: [],
    
}

fetchGIFS = (searchTerm) => {
    
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Jwqe43v3iciGaYR4o9QB14cCZcr09Zch&rating=g`)
    .then(response => response.json())
    .then(({data}) => {
        const finalResults = [];
        for (let i = 0; i < 3; i++) {
            const gif = data[i];
            finalResults.push(gif.images.original.url)
        }
        this.setState({
            gifs: finalResults
          })
    })
}

render() {

    return (
        <div>
            <GifSearch  handleSubmit={this.fetchGIFS}  />
            <GifList gifs={this.state.gifs} />
        </div>
    )

}



}
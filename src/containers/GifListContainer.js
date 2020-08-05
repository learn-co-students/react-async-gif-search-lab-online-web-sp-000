import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (animal = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=AtfsEAlf6BDVYfm39rvnjN01ZXzPmzzg&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(gif => () => {
                for(let i = 0; i < 3; i++) {
                    this.setState({ gifs: [...this.state.gifs, gif.data[i].images.original.url ]})
                }
            })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render(){
        return(
            <div>
                <h1>Text</h1>
                <GifList firstThree={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer
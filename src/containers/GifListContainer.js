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

    // state = {
    //     gifs: []
    // }

    fetchGifs = (animal = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=AtfsEAlf6BDVYfm39rvnjN01ZXzPmzzg&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(gif => {
                let array = gif.data.map(element => element.images.original.url)
                this.setState({gifs: array})
            })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render(){
        console.log("Inside GifListContainer: ", this.state.gifs);
        return(
            <div>
                <GifList firstThree={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer
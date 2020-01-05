import React, {Component} from 'react'
import Giflist from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifResults: []
    }

    componentDidMount(){
        this.fetchGifs()
    }
    
    fetchGifs(query="piglet"){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=OEBUihy5gqPVWP8JOxtdfqu47CiGipNB&rating=g&limit=3`)
        .then(res => res.json())
        .then(results => 
            this.setState({
                gifResults: results.data
            })
        )
    }
    
    handleSubmit = (input) => {
        this.fetchGifs(input)
    }

    render(){
        return (
            <div>
                <Giflist gifResults={this.state.gifResults} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }

}
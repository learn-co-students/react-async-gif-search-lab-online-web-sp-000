import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            images: []  
        }    
    }

    handleImageState= data => {
        const urls = data.map(url => url.images.original.url)
        this.setState({
            images: urls.slice(0,3)
        })

    }

    fetchImages = (query ="dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.handleImageState(json.data))        
        
            
    }

    componentDidMount(){
        this.fetchImages()
    }

    render(){
        return (
            <div>
                <GifSearch fetchImages={this.fetchImages}/>
                <GifList gifs={this.state.images}/>
            </div>
        )
    }









}
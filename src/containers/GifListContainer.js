import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

    constructor(){
        super()
        this.state = {
            firstThreeGifs : []
        }
    }

    scrapeGifData(data){
        return data.splice(0, 3).map( gif => gif.images.original.url )
    }

    handleQuery(query){
        console.log(query)
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
            .then( response => response.json())
            .then( gifs => {              
                this.setState({
                    firstThreeGifs : this.scrapeGifData(gifs.data)
                })
        })
    }
    
    componentDidMount(){
        this.handleQuery('cats')
    }
    
    render(){
        return(
            <div id= 'gifListContainer'>
                <GifList allGifs = {this.state.firstThreeGifs} />
                <GifSearch handleQuery={this.handleQuery.bind(this)}/>
            </div>
        )
    }
}

export default GifListContainer
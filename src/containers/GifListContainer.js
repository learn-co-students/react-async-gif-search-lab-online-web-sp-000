import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            gifs: []
        }
    }

    handleSearch = (query) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then( res => {
            if(!res.ok) throw res
            return res.json()
        })
        .then(data => {
            const imgData = data.data.map(i => ({url: i.images.original.url}))
            this.setState({
                gifs: imgData
            })
        })
        .catch(e => {
            alert(e)
        })

    }


    render(){

        return (
            <div className="GifListContainer">
                <GifSearch handleSearch={this.handleSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>

        )
    }
}


export default GifListContainer

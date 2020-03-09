import React from 'react'

import GifList from './GifList.js'
import GifSearch from './GifSearch.js'

class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            giphs: []
        }
    }

    updateGiphsAfterSearch = () => {
        return null 
        // returns null as placeholder
    }

    searchGiphs = (giphArray) => {
        // need to figure out a way to loop through and match with words
        // maybe do a slice of each "title" value then compare to input
        // length of slice would need to be the same size as the input
        // quick way to filter in JS?
        // separate class method to update giphs in state to display matching giphs
        // called updateGiphsAfterSearch 
    }

    handleSubmit = (value) => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tZSFGe9r8GSDWiggOlC0nCjnSG1Y3rYc&rating=g")
        .then(resp => resp.json())
        .then(giphsObj => {
            this.searchGiphs(giphsObj.data)
        })
      
    }
    
    setGiphsProps = (data) => {
        for (let i=0; i<3; i++){
            this.setState({
                giphs: [...this.state.giphs, data[i].images.original.url]
            })
        }
    }

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tZSFGe9r8GSDWiggOlC0nCjnSG1Y3rYc&rating=g")
            .then(resp => resp.json())
            .then(giphsObj => {
                this.setGiphsProps(giphsObj.data)
            })
    }
    
    render() {
        return (
            <div>
                <GifSearch searchHandler = {this.handleSubmit}/> 
                <GifList pulledGiphs = {this.state.giphs}/>
            </div>
        )
    }
}

export default GifListContainer

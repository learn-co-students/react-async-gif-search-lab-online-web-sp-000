import React, { Component } from 'react'
import GifSearch from '../components/GifSearch.js'
export default class GifListContainer extends Component{

    constructor(){
        super()
        this.state={
            search: "",
            threeGifs: []
        }
    }

    handleSubmit = (searchVal) => {
        return this.setState({
            search: searchVal
        }, () => this.fetcher)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.time === nextState.time) {
          return false
        }
        return true
      }
      

    fetcher = () => {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
            .then(resp => resp.json())
            .then(json => console.log(json))
    }

    render(){
        return(
            <div className= "GifListComponent">
                <div className= "GifSearch">
                Search: <GifSearch submitForm={this.handleSubmit}/>
                </div>
                <div className= "GifList">
                    Results: 
                    ------------------------------------------

                </div>
            </div>
        )
    }
}
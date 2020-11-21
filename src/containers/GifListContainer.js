import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GiftListContainer extends Component{

    state = {
        gifs: [],
        search: "dolphin"
    }

    componentDidMountt(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then((data) => {
            this.setState({
            gifs: data.data.map(gif => gif.images.original.url )
            })
            
        })
    }

    handleSearch = (term) =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then((data) => {
            this.setState({
            gifs: data.data.map(gif => gif.images.original.url )
            })
            
        })
    }
 
    // handleClick = () =>{
    //     this.setState({
    //         url: this.state.gifList.data[`${Math.floor(Math.random() * Math.floor(50))}`].images.original.url
    //     })
    // }

    render(){
        // const url = this.state.gifList.data[0].images.original.url
        return(
            <div>
                {/* <p>{this.state.gifList[0].images.downsized_large.url}</p> */}
            {/* <img src={this.state.url}/>
    
            <button onClick={this.handleClick}>get it</button> */}
 <GifSearch handleSearch={this.handleSearch}/>
            <GifList gifs={this.state.gifs} /> 
           


            </div>
        )
    }
}
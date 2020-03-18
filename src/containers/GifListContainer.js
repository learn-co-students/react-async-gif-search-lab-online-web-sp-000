import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor(){
        super();
        this.state = {
            gifs: [],
            titles: []
        }
       
    }

    fetching = (url='https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=n9satxgcwfuMGb47KJ7eucyZmrNd3RfQ&rating=g') => {
        // 
        return fetch(url)
        .then(response => response.json() )
        .then((myjson) => {
            console.log(myjson.data.slice(0, 3))
            let selectMyjson = myjson.data.slice(0, 3)
            // n9satxgcwfuMGb47KJ7eucyZmrNd3RfQ
            //`images.original.url`
            let gifArray = [];
            let titleArray = [];
            selectMyjson.forEach( function(gif){
                console.log("g:", gif)
                gifArray.push(gif.images.original.url)
                titleArray.push(gif.title)
            })
            console.log('gifs:', gifArray);
            console.log('titles', titleArray)

            this.setState({
                gifs: gifArray,
                titles: titleArray
            })
            console.log('state:', this.state)
        })
    }

    componentDidMount(){
        this.fetching()
    }

    handleClickSearch = (word) => {
        console.log("w:", word)
        this.fetching(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=n9satxgcwfuMGb47KJ7eucyZmrNd3RfQ&rating=g`);
        //console.log(this.state)


    }

    render(){
        return ( 
        
            <div>
                <GifList gifs={this.state.gifs} titles={this.state.titles} />
                <GifSearch handleClickSearch={this.handleClickSearch} />
            </div>
        )
    }
}
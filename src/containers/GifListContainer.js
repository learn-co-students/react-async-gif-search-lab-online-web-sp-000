import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import env from "react-dotenv";

export default class GifListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            gif1: "",
            gif2: "",
            gif3: ""
        }
    }
    
    componentDidMount () {

    }

    genGifList() {

        return (
            <div>
                <GifList url={this.state.gif1.url}/>
                <GifList url={this.state.gif2.url}/>
                <GifList url={this.state.gif3.url}/>
            </div>
            
        )
    }

    query = (query) => {
        //debugger
        this.setState(prevState => {
            return {
                ...prevState,
                query: query
            }
        })
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${env.REACT_APP_API_KEY}`)
        .then(resp => resp.json())
        .then(gifData => {
            console.log(gifData);
            //debugger
            this.setState(prevState => {
                return {
                gif1: {
                    url: gifData['data'][0].images.original.url
                },
                gif2: {
                    url: gifData['data'][1].images.original.url
                },
                gif3: {
                    url: gifData['data'][2].images.original.url
                }
            }})

            //debugger
        })
    }

    render () {
        return (
            <div class="gifList">
                

                <GifSearch query={this.query} />
                <GifList url={this.state.gif1.url}/>
                <GifList url={this.state.gif2.url}/>
                <GifList url={this.state.gif3.url}/>
            </div>
        )
    }
}
import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifUrlList: [],
            query: "pony"
        }
    }

    // componentDidMount(){
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    //     .then(response => response.json())
    //     .then(object => {
    //         this.setState({
    //             gifUrlList: object.data.slice(0,3).map(gifObject => gifObject.images.original.url)
    //         })
    //     })
    // }

    handleSubmit = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(object => {
            this.setState({
                gifUrlList: object.data.slice(0,3).map(gifObject => gifObject.images.original.url)
            })
        })
      }

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifUrlList={this.state.gifUrlList}/>
            </div>
        )
    }
}

export default GifListContainer
import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=E4K8kXfr8ywPinuh92xCCjDujxXyVZUt&rating=g')
        .then(resp=>resp.json())
        .then(json=>{
            let urlArray = []
            json.data.slice(0,3).map(i=>urlArray.push(i.images.original.url))
            this.setState({
                gifs : urlArray
            })
        })
    }

    submitHandler = (e) =>{
        

    }

    render(){
        return(
        <div>
            <GifList gifs = {this.state.gifs}/>
            <GifSearch submitHandler = {this.submitHandler} />
        </div>
        )
    }

}

export default GifListContainer
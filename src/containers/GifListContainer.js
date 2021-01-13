import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: [

            ]
        }
    }

    fetchGif = (searchTerm)=>{
      
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=E4K8kXfr8ywPinuh92xCCjDujxXyVZUt&rating=g`)
        .then(resp=>resp.json())
        .then(json=>{
            let urlArray = []
            json.data.slice(0,3).map(i=>urlArray.push({url: i.images.original.url, alt: i.slug}))
            this.setState({
                gifs : urlArray
            })
        })

    
    }

    componentDidMount(){
        this.fetchGif("YOUR%20QUERY%20HERE")
    }

    

    render(){
        return(
        <div>
            <GifList gifs = {this.state.gifs}/>
            <GifSearch submitHandler = {this.fetchGif} />
        </div>
        )
    }

}

export default GifListContainer
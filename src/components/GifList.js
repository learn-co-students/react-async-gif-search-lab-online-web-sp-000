import React, { Component } from "react";

class GifList extends Component {
    render(){
        return(
            <ul>
            {this.props.gifs.map((gif,i)=>(<li key = {i}><img src = {gif.url} alt={gif.alt}></img></li>))}
            </ul>
        )
    }

}

export default GifList
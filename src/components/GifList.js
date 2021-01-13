import React, { Component } from "react";

class GifList extends Component {
    render(){
        return(
            <ul>
            {this.props.gifs.map(i=>(<li>i</li>))}
            </ul>
        )
    }

}

export default GifList
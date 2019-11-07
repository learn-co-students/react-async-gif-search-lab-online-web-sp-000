import React, { Component } from 'react';


export default class GifList extends Component {

    renderGifs = () => this.props.gifs.map(url => {
        return <img src={url}/>
    })

    render(){
        return(
            <div>
                {this.renderGifs()}
            </div>
        )
    }
}
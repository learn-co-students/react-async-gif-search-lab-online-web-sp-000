import React, { Component } from 'react';


export default class GifList extends Component {

    renderGifs = () => this.props.gifs.map((url, id) => {
        return <img key = {id} src={url} alt=""/>
    })

    render(){
        return(
            <div>
                {this.renderGifs()}
            </div>
        )
    }
}
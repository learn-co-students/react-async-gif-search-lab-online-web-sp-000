import React, { Component } from 'react';

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.slice(0, 3).map(gif => (
                    <li><img src={gif.images.original.url} alt="www.google.com"></img></li>
                ))}
            </ul>
        )
    }
    
}



import React, { Component } from 'react';

class GifList extends Component {
    displayGifs = () => {
        return this.props.gifs.map(gif => <li><img src={gif} /></li>)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.displayGifs()}
                </ul>
            </div>
        )
            
    }
}

export default GifList
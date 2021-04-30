import React, { Component } from 'react' 

export default class GifList extends Component {

    render() {
        return (
            <div className="gif-list">
                {this.props.gifList.map(gif => 
                <li>
                <img src={gif.images.original.url} alt="gif" />
                </li>
                )}

            </div>
        )
    }
}
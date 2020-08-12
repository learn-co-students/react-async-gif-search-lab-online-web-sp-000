import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'

export default class GifList extends Component {

    render() {
        return(
        <ul>
            <li>
                {this.props.gifUrl.map(gif => <img key={gif.url} src={gif.url} alt="gif" ></img>)}
            </li>
        </ul>
        )
    }

}
import React, { Component } from 'react'

export default class GifSearch extends Component {

    render () {
        return (
            <ul>
                {this.props.gifs.map(gif=> <img alt='gif' key={gif.url} src={gif.url}/>)
                }
            </ul>
        )
    }
}
import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                <li><img src={this.props.topThreeGifs[0].images.original.url}></img></li>
                <li><img src={this.props.topThreeGifs[1].images.original.url}></img></li>
                <li><img src={this.props.topThreeGifs[2].images.original.url}></img></li>
            </ul>
        )
    }
}
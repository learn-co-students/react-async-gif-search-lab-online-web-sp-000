import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return(
            <ul>
                <img src = {this.props.gifs[0]} alt = "gif"></img>
                <img src = {this.props.gifs[1]} alt = "gif"></img>
                <img src = {this.props.gifs[2]} alt = "gif"></img>

            </ul>
        )
    }
}
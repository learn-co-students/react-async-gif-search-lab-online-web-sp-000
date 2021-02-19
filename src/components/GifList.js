import React, { Component } from 'react'

export default class GifList extends Component {

    render() {
        return ( <ul className="gifs-container">
            {this.props.gifs.map(gif => <li>{gif}</li>)}
        </ul> )
    }
}
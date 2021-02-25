import React, {Component} from 'react'

export default class GifList extends Component {
    render() {

        if (this.props.gifs.length > 0) {

            return (
                <ul>
                    <li><img src={this.props.gifs[0]} alt="gif"></img></li>
                    <li><img src={this.props.gifs[1]} alt="gif"></img></li>
                    <li><img src={this.props.gifs[2]} alt="gif"></img></li>
                </ul> 
            )

        }
        else {
            return null
        }
    }
}
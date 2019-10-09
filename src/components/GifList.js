import React, {Component} from 'react'

export default class GifList extends Component {

    displayGifs = () => {
        return this.props.gifs.map(url => {
            return <li><img src={url} alt={url}/></li>
        })
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
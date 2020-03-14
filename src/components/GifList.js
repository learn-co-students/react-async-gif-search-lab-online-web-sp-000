import React, {Component} from 'react'

export default class GifList extends Component {
    showGifs = () => {
        console.log(this.props.imgURL)
        return(
            this.props.imgURL.map(url => (<li><img source={url} alt='default'/></li>))
        )
    }
    
    render() {
        return(
            <ul>{this.showGifs()}</ul>
        )
    }
}
import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'
import App from './App'

class GifList extends Component {

    constructor(props) {
        super()
        this.state = {
            props
        }
    }

    render() {
        return(
            <div>
                
                {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
                
            </div>
        )
    }

}
export default GifList

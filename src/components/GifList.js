import React, {Component} from 'react'

class GifList extends Component {
    // constructor(props) {
    //     this.state = {
    //         gifs: props
    //     }
    // }
    render() {
        return(
            <ul>
                {this.props.gifs.map((gif,id) => <li key={id}><img src={gif.images.original.url} alt="gif"></img></li>)}
            </ul>
        )
    }
}

export default GifList
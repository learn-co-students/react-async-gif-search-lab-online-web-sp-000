import React, {Component} from 'react'


export default class GifList extends Component {

    generateGifs = (gifs) => {
    console.log(gifs)
    if (gifs) {   
        return gifs.map(gif => {
            return <img src={gif}></img> 
        })
        }
    }


    render() {
    return <div>{this.generateGifs(this.props.gifs)}</div>
    }
}
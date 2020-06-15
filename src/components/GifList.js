import React, { Component } from 'react'
import Gif from './Gif'

class GifList extends Component{
    
    render(){
        return (
            <ul id='gifList'>
                { this.props.allGifs.map( x => <Gif url={x}/>) }
            </ul>
        )
    }

}

export default GifList
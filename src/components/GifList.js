import React, { Component } from 'react'

class GifList extends Component {

    generateInnerJSX = () => {
            return (
                this.props.gifs.map((aGif) => 
                <li><img src={aGif} /></li>
            ) 
    )}
        
    render() {
        return (
          <div>
            <ul>
                {this.generateInnerJSX()}
            </ul>
          </div>
        )
    }
}

export default GifList;  
import React, { Component } from 'react';



class GifList extends Component {

    render(){
      console.log(this.props.gifs.data)
        return (
            <div>  
            { this.props.gifs.map(gif => <img key={gif.url} src= {gif.url} alt="gif" />)}
            </div>

        )
    }
}

export default GifList;
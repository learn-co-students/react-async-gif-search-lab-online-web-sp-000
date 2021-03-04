import React, {Component} from 'react'

class GifList extends Component{
    render(){
        return (
            <div>
                {this.props.gifs.map((gif, index) => <img key={index} src={gif.embed_url} alt={gif.title}/>)}
            </div>
            
        )
    }

}

export default GifList
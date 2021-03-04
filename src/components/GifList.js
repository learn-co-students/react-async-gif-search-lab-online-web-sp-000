import React, {Component} from 'react'

class GifList extends Component{
    render(){
        return (
            <div>
                <ul>
                {this.props.gifs.map((gif, index) => <li key={index}><img src={gif.embed_url} alt={gif.title}/></li>)}
                </ul>
                
            </div>
            
        )
    }

}

export default GifList
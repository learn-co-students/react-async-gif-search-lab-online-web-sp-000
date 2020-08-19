import React, {Component} from 'react';

export default class GifList extends Component {


    render() {
        return (
             <div>
                {this.props.gifs.map(gifData => <img src={gifData.images.fixed_width.url} />)} 
            </div>
        )
       
    }

}
import React from 'react';

export default class GifList extends React.Component {


    render(){
        return(
            <ul>
                <li>{this.props.gifs[0]}</li>
                <li>{this.props.gifs[1]}</li>
                <li>{this.props.gifs[2]}</li>
            </ul> 
        )
    }
}
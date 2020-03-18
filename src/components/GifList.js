import React, { Component } from 'react';

export default class GifList extends Component {

    render(){
        console.log(this.props)
        return(
           
            <ul>
                
                <li><img src={this.props.gifs[0]} alt={this.props.titles[0]} ></img></li>
                <li><img src={this.props.gifs[1]} alt={this.props.titles[1]} /></li>
                <li><img src={this.props.gifs[2]} alt={this.props.titles[2]} /></li>

            </ul>
        )
    }

} 
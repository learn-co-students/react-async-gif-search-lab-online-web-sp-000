import React, { Component } from "react";

export default class GifList extends Component{

    render(){
        return(
            <ul>
                <li><img src={this.props.gifs[0]} alt="first"></img></li>
                <li><img src={this.props.gifs[1]} alt="second"></img></li>
                <li><img src={this.props.gifs[2]} alt="third"></img></li>
            </ul>
        )
    }

}
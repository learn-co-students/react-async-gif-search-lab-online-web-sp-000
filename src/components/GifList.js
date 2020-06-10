import React, { Component } from "react";

export default class GifList extends Component {
    
    render(){
       
        return(
          <ul>
          {this.props.gifs.map(image =>
            <li> <img src= {image}/></li>)  
          }
          </ul>  
        )
    } 

}
 
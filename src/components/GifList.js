import React, { Component } from 'react'
 
export default class GifList extends Component {
 
 
  render() {
    return (
      <ul> 
        <li> {this.props.gifs.map(gif => <img src={gif.url} />)} </li>  
      </ul>
    )
  }
 
  
  
}

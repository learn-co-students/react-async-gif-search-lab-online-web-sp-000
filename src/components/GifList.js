import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    if(this.props.gifs) {
      return (
      <ul>
        <li>{this.props.gifs[0]}</li>
        <li>{this.props.gifs[1]}</li>
        <li>{this.props.gifs[2]}</li>
      </ul>
      )
    } else {
      return <div></div>
    }
  }
}
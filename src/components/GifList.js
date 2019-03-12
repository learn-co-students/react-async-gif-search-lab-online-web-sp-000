import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => (
          <li key={this.props.gifs.indexOf(gif)}>
            <img src={gif} />
          </li>
        ))}
      </ul>
    );
  }
}

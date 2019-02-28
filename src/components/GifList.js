import React, { Component } from 'react';

class GifList extends Component {

  render() {
    const hasGifs = this.props.gifs
    let returnList;

    if (hasGifs) {
      returnList = <ul>
                    <li><img src={this.props.gifs[0]} /></li>
                    <li><img src={this.props.gifs[1]} /></li>
                    <li><img src={this.props.gifs[2]} /></li>
                  </ul>;
    } 
    return (
      <div>{returnList}</div>

    );
  }

}

export default GifList;

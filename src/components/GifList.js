import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div className="gif list">
        <ul>
          {this.props.gifs.map((gif, index) => <li key={index}><img src={gif} alt="" /></li>)}
        </ul>
      </div>
    );
  }

}

export default GifList;

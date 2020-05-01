import React, { Component } from 'react';

class GiftList extends Component {

  render() {
    console.log("giftList", this.props.result)
    return (
      <div>
        {this.props.result.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
    );
  }

}

export default GiftList;
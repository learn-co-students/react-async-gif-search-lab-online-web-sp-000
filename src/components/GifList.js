import React, { Component } from "react";

class GifList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.data.map((d) => (<li><img src={d.url}/></li>))}
      </ul>
    )
  }

}

export default GifList;

import React from "react";

class GifList extends React.Component {

  render() {
    return(
  <div>
    <ul>
      <li>  <img src = {this.props.gifs[0]} alt='' /></li>
      <br />
      <li>  <img src = {this.props.gifs[1]} alt='' /></li>
      <br />
      <li>  <img src = {this.props.gifs[2]} alt='' /></li>
    </ul>
  </div>
    )
  }
}

export default GifList

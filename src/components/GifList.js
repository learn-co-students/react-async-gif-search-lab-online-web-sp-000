import React from "react";

class GifList extends React.Component {
  
  render() {
    return(
    <div>
      {this.props.gifs.map(gif => <div><img src={gif}  key={gif} alt="" /></div>)}
      </div>
    )
  }
}

export default GifList

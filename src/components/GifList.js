import React from "react";

class GifList extends React.Component {
  images(gifs) {
    if (gifs.data) {
      let x = gifs.data.map(data => data.images.original.url);
      return x
        .map(image => (
          <li>
            <img src={image} alt="workplease"></img>
          </li>
        ))
        .slice(0, 3);
    }
  }
  render() {
    return (
      <div>
        <ul>{this.images(this.props.gifs)}</ul>
      </div>
    );
  }
}

export default GifList;

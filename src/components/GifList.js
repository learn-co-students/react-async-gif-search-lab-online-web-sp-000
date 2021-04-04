import React, { Component} from 'react';

export default class GifList extends Component {
  generateImages = () => {
    return this.props.imageURLs.map( url => <img key={url} src={url} />)
  }

  render() {
    return (
      <div>
        {this.generateImages()}
      </div>
    )
  }
}

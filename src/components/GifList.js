import React from 'react';

class GifList extends React.Component {

  showGifs() {
    return this.props.gifURLs.map((url) => <div><img src={url} alt="from Gify" /></div>)
  }

  render() {
    return(
      <div className="gif-list">{this.showGifs()}</div>
    )
  }
}

export default GifList

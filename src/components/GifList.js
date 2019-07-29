import React from 'react';

export default class GifList extends React.Component {
  render(){
    return (
      <div>
        <ul>
          {this.props.gifs.map((gif, i) => {
            return <li><img key={i} src={gif.images.original.url} alt={gif.slug}/></li>
          })}
        </ul>
      </div>
    );
  }
}
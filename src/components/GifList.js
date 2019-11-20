import React from 'react';

const GifList = props => {
  return (
    <ul>
      {props.gifs.map((gif, index) => (
        <li key={index}><img src={gif.url} alt="gif"/></li>
      ))}
    </ul>
  );
}

export default GifList
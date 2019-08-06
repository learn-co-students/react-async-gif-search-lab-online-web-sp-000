import React from 'react';

const GifList = props =>
  <ul>
    {props.gifs.map(g => (
      <img key={gif.url} src={gif.url} alt="gif"/>
    ))}
  </ul>

default export GifList

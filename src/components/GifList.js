import React from 'react'

const GifList = props =>
  <ul>
    {props.gifs.map(gif => (
      <li key={gif.images.original.url}><img src={gif.images.original.url} alt={gif.images.original.url}></img></li>
    ))}
  </ul>


export default GifList

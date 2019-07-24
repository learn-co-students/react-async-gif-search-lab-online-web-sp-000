import React from 'react'

const GifList = props =>
  <div>
    {props.gifs.map(gif => (
      <img src={gif.images.original.url} alt={gif.title} key={gif.id}/>
    ))}
  </div>

export default GifList

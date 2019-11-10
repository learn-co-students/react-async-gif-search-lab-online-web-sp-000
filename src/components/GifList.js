import React from 'react';

const GifList = ({ gifs }) => {
  const gifTags = gifs.map((gif) => {
    return <li key={gif.id}><img src={gif.images.original.url} /></li>
  })

  return (
    <div>
      <ul>
        {gifTags}
      </ul>
    </div>
  );
}

export default GifList;

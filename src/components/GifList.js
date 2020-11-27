import React, { Component } from 'react';

const GifList = props => {
  console.log('GifList mounted', props);
  return (
    <div>
        {props.pics.map(img => <img src={img.url} key={img.url} />)}
    </div>
  )
}

export default GifList
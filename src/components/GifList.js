import React from 'react';

const GifList = props => props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" ></img>)

export default GifList
import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
    </div>
  )
}

export default GifList
import React from 'react';

const GifList = props => {
  return(
    <div>
      { props.gifList.map( gif => <img src={gif.url} key={gif.url} /> ) }
    </div>
  )
}

export default GifList;

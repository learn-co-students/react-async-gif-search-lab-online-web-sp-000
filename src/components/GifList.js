import React from 'react';

const GifList = (props) => {
    return ( 
      <ul>
        {props.gifs.map(gif => (
          <li key={gif}>
           <img src={gif} alt="gif" />
          </li>
        ))}
      </ul>
     );
  }
 
export default GifList;
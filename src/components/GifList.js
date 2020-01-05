import React, {Component} from 'react';

const GifList = props => {
    let images = props.gifResults.map(
        (gif, id) => 
            <img alt="gifUrl" key={id} src={gif.images.original.url}>
            </img>
    )
    
    return(
        <ul>
            <li>{images}</li>
        </ul>
    )
}

export default GifList;
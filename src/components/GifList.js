import React from 'react';

const GifList = props => {
    return(
        <ul>
            {props.gifs.map(g => <li><img src={g.images.original.url} alt="gif"/></li>)}
        </ul>
    )
}

export default GifList
import React from 'react';

const GifList = props => {
    return (
        <div>
            <ul>
                {props.gifs.map(gif => {
                    return(
                        <li key={gif.id}>
                            <img id={gif.id} src={gif.images.original.url} alt='gif' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GifList
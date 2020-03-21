import React from 'react'

const GifList = (props) => {
    return (
        <ul>
            {props.gifs.map(gif => {
                return <li><img src={gif.url} /></li>
            })}
        </ul>
    )
}

export default GifList
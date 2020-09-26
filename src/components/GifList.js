import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj, idx) => <li key={idx}><img src={gifObj.images.original.url} alt="" /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList
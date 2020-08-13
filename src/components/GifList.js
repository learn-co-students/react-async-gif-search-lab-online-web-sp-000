import React from 'react'

const GifList = (props) => {

    const renderGifs = () => {
        return props.gifs.map(gifData => (
            <li>
                <img src={gifData.url} alt=""/>
            </li>
        ))
    }

    return (
        <ul>
            {renderGifs()}
        </ul>
    )

}

export default GifList

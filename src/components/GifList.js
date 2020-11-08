import React from 'react'

const GifList = ({gifs}) => (
    <div>{gifs.map((gif, index) => animalGif(gif.images.original, index))}</div>
)

const animalGif = ({url, width, height}, index) => (
    <div key={index.toString()}>

        <img src={url} width={width} height={height}></img>
    </div>
)

export default GifList

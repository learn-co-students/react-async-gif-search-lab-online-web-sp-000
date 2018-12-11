import React from 'react'

function GifList({dataObj}){

  return (
    <li>
      <img
        src={dataObj.images.original.url}
        alt={dataObj.title}

      />
    </li>
  )
}

export default GifList

import React from 'react'

const GifList = (props) => {
  return (
    <ul>
      {props.list?(props.list.map(url=>{
        return <li><img src={url.images.original.url}/></li>
      })):null}
    </ul>
  )
}

export default GifList

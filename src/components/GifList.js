import React from 'react'

const GifList = props => {
  return (
    <div class="col">
      <ul>
    {props.imgs.map(img => <li><img key={img.url} src={img.url}/></li>)}
    </ul>
    </div>
  )
}

export default GifList

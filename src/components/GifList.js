import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.items.map(item => <img key={item.url} src={item.url} alt="element"/>)}
    </div>
  )
}

export default GifList
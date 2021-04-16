import React from 'react'

const GifList = props => {
    console.log(props)
    // debugger
    return(
        <div>
            {props.gifImages.map(gif => <img key={gif} src={gif} alt="gif"/>)}
        </div>
    )
}

export default GifList
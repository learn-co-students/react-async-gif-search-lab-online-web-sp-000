import React from 'react'




    const GifList = props => {
        return (
            <div>
                {props.gifList.map(gif => <img key={gif.url} src={gif.url} alt={""}/>)}
            </div>
        )
    }



export default GifList
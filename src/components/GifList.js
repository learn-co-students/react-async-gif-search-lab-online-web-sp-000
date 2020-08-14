import React from "react";


const GifList = props => {
    console.log("I am here", props.gifs)
    return(
        <div>
            {props.gifs.map(gif => <img src={gif.url} key={gif.url} alt="gif"/> )}
        </div>
            )
        }
        //key has to be unique thats why key={gif.url}
        //alt = " " An image with an alternate text specified:
        
    // we mapped over because we want to render all gifs(3gifs) in props render them as images 


export default GifList
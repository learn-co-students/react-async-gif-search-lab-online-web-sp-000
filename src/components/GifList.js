import React from "react";

const GifList = props => {
    console.log(props.gifs)
    return(
        {props.gifs.map (gif => {
    <li><img src={gif.url} key={gif.id} alt={gif.type}/></li>

    })}
    
)}



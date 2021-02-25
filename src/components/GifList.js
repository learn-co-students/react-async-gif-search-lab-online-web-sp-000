import React from 'react';

//presentation component: receiving data from props 
const GifList = props => {
    console.log(props);

    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
    )
}

export default GifList 
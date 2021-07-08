import React from 'react';
const GifList = (props) => {
    return ( 
        <div>
            <ul>
                {props.data.map(gif =>
                    <li>
                        <img src={gif.images.original.url} height="240" width="240"/>
                    </li>)}
            </ul>
        </div>
     );
}
 
export default GifList;
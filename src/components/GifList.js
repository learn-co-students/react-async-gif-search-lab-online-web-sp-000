import React from 'react'

function GifList(props){

console.log('props', props.gifs)

 function handleGifs(){
 const mappedURLs= props.gifs.map((url)=>{
    return <li><img src={url} /></li>
 })

 return mappedURLs
    
 }



    return(
        
        <div>
            <ul>
            {handleGifs()}
            </ul>
        </div>
    )
}

export default GifList;
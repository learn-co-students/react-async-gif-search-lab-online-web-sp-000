import React from 'react'




    const GifList = gifs => {

        return (
          <ul>
             
                 {gifs.topThree.map(element =>
                 <li key={element.images.original.url}>
                     <img  src={element.images.original.url} alt="from Giphy"/> 
                </li> )}   
             
          </ul>
              
         
        )
      }
      

export default GifList
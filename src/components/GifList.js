import React from 'react'

const GifList = (props) => {
  console.log('props', props.gifArray);
  const allGifs = props.gifArray.map((eachGif, index) => {
     console.log('eachGif', eachGif)
     return <li key={index}> <img src={eachGif.link}/></li>
  });
//   const gifList = props.gifArray.map((gif, index) => {
//    return <li key={gif.id}> {gif.name}</li>
// });
    // <span>{props.text}</span><button>DELETE</button>
    // {props.gifArray.map((eachGif, index) => {
    //   console.log('eachGif', eachGif);
    //     <img src={eachGif.link}/>
    // })}
  return (
    <div>
      {allGifs}
    </div>
  )
}


export default GifList

// const Bands = (props) => {
//   const all_bands = props.bands.map((band, index) => {
//      return <li key={index}> {band.name}</li>
//   });
//   return (
//     <div>
//        {all_bands}
//     </div>
//   );
// };

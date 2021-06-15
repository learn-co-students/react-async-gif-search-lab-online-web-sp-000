import React from 'react'

export default class GifList extends React.Component {

    gifLis = (gifsFetched) => {
//         // console.log('succesfully transfered to GifList?', gifsFetched)
//         // console.log('images are real?', gifsFetched.map((gif, id) => <img id={'images-id-'+id} src={gif.images.original.url} />  ))
        let theseGifs = gifsFetched.map((gif, id) => <li> <img id={id} src={gif.images.original.url}/> </li>)
        console.log('gifLis-> theseGifs', theseGifs)
        return theseGifs
    }

    render(){

        return(
            <ul id = {'GIF-List'}>
                {this.gifLis(this.props.gifs)}
            </ul>
        )
    }
}

// function GifList(props){
//     let gifLis = props.gifs.map(gif => <li> <img src={gif.images.original.url}/> </li>)
//     console.log('gifLis:', gifLis)
//     return(
//         <ul>
//             {gifLis}
//         </ul>
//     )
// }

// export default GifList
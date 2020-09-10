import React, {Component} from 'react'

// function GifList(props) {
//     let gifArray = props.gifs.map((gifObj) => <li><img src={gifObj.images.original.url} /></li>)
//     console.log("gif array: ", gifArray)
//     return (
//         <ul>
//             {gifArray}
//         </ul>
//     )
    
// }



export default class GifList extends Component {
    
    

    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(data =>
                        <img src={data.images.fixed_width.url} alt="" />)}
                </ul>
                    
            </div>
        )
    
    }

}

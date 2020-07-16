import React from 'react'

export default class GifList extends React.Component{
    
    createImg = () => {
        console.log(this.props.imgs)
        return this.props.imgs.map(img => <ul> <li key={img.id}> <img src={img.images.original.url}/> </li> </ul>)
    }

    render() {
        return(
            <div>
                {this.createImg()}
            </div>
        )
    }

}
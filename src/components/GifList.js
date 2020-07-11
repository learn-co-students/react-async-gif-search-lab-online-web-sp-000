import React from 'react'

export default class GifList extends React.Component{

    createImg = () => {
       return this.props.imgs.map(i => <ul><li key={i.id}><img src={i.images.original.url} /> </li></ul>)
    }

    render(){
        return(
            <div>
                {this.createImg()}
            </div>
        )
    }
}
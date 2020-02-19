import React from 'react'

export default class GifList extends React.Component{

    generateList = () =>{
    return this.props.gifs.map(gif=><li><img src={gif}/></li>)
    }

    render(){
        return(
            <ul>
              {this.generateList()}
            </ul>
        )
    }

}
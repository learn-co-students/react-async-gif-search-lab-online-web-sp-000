import React, { Component } from 'react';


export default class GifList extends Component {

    renderGifs = () => this.props.gifs.map(url => {
        return <img src="https://media3.giphy.com/media/kMdlyJ74u9khW/giphy.gif?cid=ef0ab936ff16c60c4aceeecbd895534d71299d0fc46652ac&rid=giphy.gif"/>
    })

    render(){
        return(
            <div>
                <img src="https://media3.giphy.com/media/kMdlyJ74u9khW/giphy.gif?cid=ef0ab936ff16c60c4aceeecbd895534d71299d0fc46652ac&rid=giphy.gif"/>
            </div>
        )
    }
}
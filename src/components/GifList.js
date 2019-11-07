import React, { Component } from 'react';


export default class GifList extends Component {

    renderGifs = () => this.props.gifs.map((url, id) => { 
        return  <div className='col-md-4' key = {id}><img src={url} alt=""/> </div>
    })
    

    render(){
        return(
            <div>
              {this.renderGifs()}
            </div>
        )
    }
}
import React, { Component } from 'react'


export default class GifList extends Component {

    renderGifs = () => {
        return (this.props.imageArray.map(picture => {
            return (
            <div className='col-md-4'>
                <li><img src={picture.images.original.url} alt={picture.title} /></li>
            </div>
            )
            })
        )
        }

render() {
        return (
         
                <ul>
                    {this.renderGifs()}
                </ul>
        
           
        )
    }
}


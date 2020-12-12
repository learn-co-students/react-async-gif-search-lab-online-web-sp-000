import React, { Component } from 'react'

export class GifList extends Component {
    animalsList = () => {
        this.props.animals.map(animal => {
            return <li><img src={animal.images.original.url} alt='' /></li>
        })
    }
    render() {
        return (
            <div>
               <ul>
                   {this.animalsList()}
               </ul> 
            </div>
        )
    }
}

export default GifList

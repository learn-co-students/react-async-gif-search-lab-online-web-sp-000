import React from 'react'

export default class GifList extends React.Component {

    generateList = () => {
        return this.props.gifs.map( img => <li> <img src={`${img}`} /> </li> )
    }

    render() {
        return (
            <ul>
                {this.generateList()}
            </ul>
        )
    }
    
}
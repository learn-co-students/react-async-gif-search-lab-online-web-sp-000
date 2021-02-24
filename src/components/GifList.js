import React from 'react'

export default class GifList extends React.Component {

    renderGifs() {
        return this.props.gifs.map( gif => 
        <li style={{padding: '10px', listStyleType: 'none'}}>
            <img
            style={{ maxHeight: '300px', maxWidth: '500px'}} 
            className='gif' 
            alt={gif.bitly_gif_url} 
            src={gif.images.original.url} />
        </li>)
    }

    render() {
        return <ul style={{float: 'left', padding: '30px'}}>{this.renderGifs()}</ul>
    }
}

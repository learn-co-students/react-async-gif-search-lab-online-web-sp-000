import React, {Component} from 'react'

export default class GifList extends Component {

  render() {
    const urls = this.props.gifs.map(gif => gif.images.original.url)
    
    return(
      <ul>
        {urls.map((url, index) => 
          <li key={index}><img src={url}/></li>
        )}
      </ul>
    )
  }
}
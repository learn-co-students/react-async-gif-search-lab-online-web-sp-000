import React, {Component} from 'react'

export default class GifList extends Component {

  render(){
    return(
      <ul>{this.props.gifInfo.map(gif => <li><img src={gif.images.original.url} alt="dolphin" /></li>)}
      </ul>
    )
  }

}

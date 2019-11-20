import React, {Component} from 'react'

export default class GifList extends Component {
  render(){
    return (
      <ul>
        { this.props.images.map((url, key) => {
          return (<li key={key}><img src={url}/></li>)
        }) }
      </ul>
    )
  }
}

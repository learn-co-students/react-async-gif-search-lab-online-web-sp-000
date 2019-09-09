import React, {Component} from 'react'

export default class GifList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        <li><img src={this.props.gifs[0]} alt=""/></li>
        <li><img src={this.props.gifs[1]} alt=""/></li>
        <li><img src={this.props.gifs[2]} alt=""/></li>
      </ul>
    )
  }
}

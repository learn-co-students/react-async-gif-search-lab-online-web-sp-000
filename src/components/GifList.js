import React, { Component } from 'react'

class GiftList extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ul>
        <li><img src={this.props.url} /></li>
      </ul>
    )
  }
}

export default GiftList
import React, {Component} from 'react'

class GifList extends Component {

  render() {
    return (<div>
      <img src={this.props.gif} alt=""/>
      </div>)
  }
}

export default GifList

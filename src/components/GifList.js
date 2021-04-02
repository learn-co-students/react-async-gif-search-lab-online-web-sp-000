import React, {Component} from 'react'

class GifList extends Component {

  renderGifList = () => {
    return this.props.gifs.map(gif =>
      <li key={gif.id}>
        <img src={gif.url} alt="img"/>
      </li>
    )
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderGifList()}
        </ul>
      </div>
    )
  }

}

export default GifList

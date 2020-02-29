import React from 'react'

//import GifList from '../components/GifList'

class GifList extends React.Component {

  render() {
    return (
      <div>
          <img src={this.props.gifs[0].url} />
      </div>
    )
  }
}

export default GifList

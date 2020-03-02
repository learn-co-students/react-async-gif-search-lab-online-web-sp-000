import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    query: 'lunch'
  }
  componentDidMount() {

    const that = this;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=lXxOcGN2muL7Dl7JhTxQA1X4zPiajgwG&rating=g`)
      .then(response => response.json())
      .then(data => {
        that.setState({
          gifs: data.data
        })
      })
  }


  sendData = (data) => {
    this.setState({
      query: data
    })
  }

  render() {
    return (
      <div>
          <GifSearch query={this.state.query} senddata={this.senddata} />
          <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer

import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    query: ''
  }

  componentDidMount() {
    this.doFetch();
  }

  doFetch = (query) => {
    const that = this;

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lXxOcGN2muL7Dl7JhTxQA1X4zPiajgwG&rating=g`)
      .then(response => response.json())
      .then(data => {
        that.setState({
          gifs: data.data
        });
      });
  }

  render() {
    return (
      <div>
        <GifSearch fetcher={this.doFetch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer

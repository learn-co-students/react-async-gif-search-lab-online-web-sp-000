import React from 'react'

import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor(){
    super();
    this.setState({
      gifs: []
    });
  }
  componentDidMount() {
    let that = this;
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=lXxOcGN2muL7Dl7JhTxQA1X4zPiajgwG&rating=g`)
      .then(response => response.json())
      .then(data => {
        that.setState({
          gifs: data.data.slice(0, 3)
        })
      })
  }

  /*
    shouldComponentUpdate(){

    }

    const submitHandler = () => {
  <GifSearch submitHandler={submitHandler} />

  }*/

  render() {
    return (
      <div>
          <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer

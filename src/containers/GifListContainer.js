import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gif1: "",
      gif2: "",
      gif3: ""
    }
  }
    
  render() {
    return (
      <div>
        <GifSearch query={this.query} />
        <GifList url={this.state.gif1.url} />
        <GifList url={this.state.gif2.url} />
        <GifList url={this.state.gif3.url} />
      </div>
    )
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=jk43Q4XNSXTnhM8d68OTDBk7hMdUt3m4')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        gif1: data.url[0],
        gif2: data.url[1],
        gif3: data.url[2]
      })
    })
  }
}

export default GiftListContainer
import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      giphy: []
    }
  }

  handleSubmit = value => {
    fetch(`http://api.giphy.com/v1/gifs/search?q={value}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          giphy: data.map(g => ({url: g.images.original.url}))
        })
      })
  }

  // path to image page: images.original.url
  componentDidMount() {
    // let query = WHATEVER IS SEARCHED
    let apiKey= 'dc6zaTOxFJmzC'
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        giphy: data.map(g => ({url: g.images.original.url}))
      })
     })
    }

  render() {
    return (
      <React.Fragment>
        <GifList data={this.state.gif}/>
        <GifSearch submitHandler={this.handleSubmit}/>
      </React.Fragment>
    )
  }


}

export default GifListContainer;

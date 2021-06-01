import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      query: 'type something...',
      imageUrls: []
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log("in form submit")
    console.log(this.state.query)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=t1B4KTBP8BcMIHq7ek0YWQChdiY9D6Qt&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      let randomI = Math.floor(Math.random() * 20);
      let endPoint = randomI + 3;
      let arr = json.data.slice(randomI, endPoint);
      let urls = arr.map(item => item.images.original.url)
      this.setState({imageUrls: urls})
    })
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  render() {
    return(
      <div>
        <GifSearch submitAction={this.handleSubmit} changeAction={this.handleChange} queryTerm={this.state.query}/>
        <GifList gifListItems={this.state.imageUrls}/>
      </div>

    )
  }
}

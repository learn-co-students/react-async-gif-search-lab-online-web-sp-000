import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

  state = {
    pics: []
  }

  componentDidMount() {
    console.log('GifListContainer mounts')
    this.containerFetch()
  }

  containerFetch = (q='test') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g&limit=5`)
      .then(res => res.json())
      .then(({data}) => {
        console.log(data);
        this.setState({ pics: data.map( img => ({ url: img.images.original.url }) ) })
      })
  }

  render() {
    return (
      <div>
        <GifSearch containerFetch={this.containerFetch}/>
        <GifList pics={this.state.pics} />
      </div>
    )
  }
  
}
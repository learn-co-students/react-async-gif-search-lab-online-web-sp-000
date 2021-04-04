import React, { Component} from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      imageURLs: []
    }
  }

  handleSearch = (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=3&api_key=eLx5I3gpgN8RvXsXTGk4E3NmFJFCMsIz&rating=g
`;
  fetch(url).then( resp => resp.json() ).then(
json => {
  let imageURLarray = json.data.map( object => object.images.original.url);

  this.setState({
    imageURLs: imageURLarray
  }, () => console.log(this.state.imageURLs))
})
}



  render() {
    return (<div>
      hilindaxinchaocanha
      <GifSearch handleSearch={this.handleSearch} />
      <GifList imageURLs={this.state.imageURLs} />

      </div>)
  }
}

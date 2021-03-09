import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    imgs: []
  }

  componentDidMount() {
    this.getImgs()
  }

  getImgs = (q = 'scarcrow') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=RkWiLHJlKq5MX1hdBsZC679Gj0895nbL`)
    .then(response => response.json())
    .then(({data}) => {
      console.log(data)
      this.setState({
        imgs: data.map(i => ({url: i.images.original.url}) )
      })
    })
  }

  render() {
    return(
      <div class="container">
        <div class="row">
        <GifSearch getImgs={this.getImgs}/>
        <GifList imgs={this.state.imgs}/>
        </div>
      </div>
    );
  }

}


export default GifListContainer




//     RkWiLHJlKq5MX1hdBsZC679Gj0895nbL

import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor(){
    super()
    this.state = {
      images: []
    }
  }

  loadImagesIntoState = data => {
    const urls = data.map(el => el.images.original.url)
    this.setState({
      images: urls.slice(0, 3)
    })
  }

  submitHandler = (event, data) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${data.query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => this.loadImagesIntoState(json.data))
  }

  // componentDidMount(){
  //   const query = "DOGS"
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
  //     .then(resp => resp.json())
  //     .then(json => this.loadImagesIntoState(json.data))
  // }

  render(){
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler}/>
        <GifList images={this.state.images}/>
      </div>
    )
  }

}

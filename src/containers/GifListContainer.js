import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    searchTerm: "dolphin",
    gifList: []
  }

  submitHandler = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  fetchGifs = () => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=5QJRXVJusYmqAP88o8g8QLQYEZdorcQF&rating=g`
    fetch(url)
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        gifList: obj.data.slice(0, 3)
      })
    })
  }

  render(){
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler}/>
        <GifList gifInfo={this.state.gifList} />
      </div>
    )
  }

  componentDidMount(){
    this.fetchGifs()
  }
  componentDidUpdate(){
    this.fetchGifs()
  }
}

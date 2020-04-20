import React, { Component } from 'react'
import GifSearch from './GifSearch'
export default class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ''
  }
  getGifsFromTerm(searchTerm) {
    const apiFront = 'https://api.giphy.com/v1/gifs/search?q='
    const apiBack = '&api_key=JmiC2Fc8fzNjZbCMLTI6E3CYo6HYdQIj&rating=g'
    const apiSearch = `${apiFront}${searchTerm}${apiBack}`
    fetch(apiSearch)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data.splice(0,3)
        })
      })
  }

  handleSubmit = event => {
    this.getGifsFromTerm(this.state.searchTerm)
    console.log(this.state.gifs)
    this.setState({
      searchTerm: ''
    })
    event.preventDefault()
  }

  handleTermChange = event => {
    this.setState({
      searchTerm: event.target.value.toLocaleLowerCase()
    })
  }

  render() {
    const gifs = this.state.gifs
    return(
      <div>
        <GifSearch term={this.state.searchTerm} handleTermChange={this.handleTermChange} handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

class GifList extends Component {
  // makeGifsLis(gifs){
  //   if(gifs !== []){
  //     console.log('Here')
  //     gifs.map(gif => this.makeGifLi(gif))
  //   }
  // }
  // makeGifLi(gif){
  //   <li><img src={gif.images.original.url} /></li>
  // }
  render(){
    const gifs = this.props.gifs
    if(gifs[0]){
      return(
        <ul>
          <li><img src={gifs[0].images.original.url} /></li>
          <li><img src={gifs[1].images.original.url} /></li>
          <li><img src={gifs[2].images.original.url} /></li>
        </ul>
      )
    } else {
      return ''
    }
  }
}

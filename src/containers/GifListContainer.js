import React, {Component} from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      search: '',
      list: []
    }
  }

  updateSearch = (term)=> {
    this.setState({search: term})
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=KPGxaDN469klKyBFA1jqqRg1341Evskz&limit=3`
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({list: json.data}))
  }



  render(){
    return (<div className="gifContainer">
      <GifSearch updateSearch={this.updateSearch}/>
      <GifList list={this.state.list} search={this.state.search}/>
    </div>)
  }
}

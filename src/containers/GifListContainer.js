import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


class GifListContainer extends React.Component {

  state={
    json:[]
  }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=khabib&api_key=dc6zaTOxFJmzC&rating=g')
      .then(res=>res.json()).then(json=>{
        this.setState({
          json:json.data
        })
      })
  }

  search=(keyword)=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res=>res.json()).then(json=>{
        this.setState({
          json:json.data
        })
      })
  }

  render () {

    return(
          <div>
            <GifList list={this.state.json}/>
            <GifSearch search={this.search}/>
          </div>
          )
  }
}

export default GifListContainer;

import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const API = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
class GifListContainer extends Component {
  state = {
    theData: [],
    searchFetch: []
  }

  searchRequest = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        searchFetch: myJson.data
      }, ()=>console.log(this.state.searchFetch))
    });
  }


  componentDidMount() {
    fetch(API)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        theData: myJson.data
      }, ()=>console.log(this.state.theData))
    });
  }


  renderData = () => {
    if (this.state.searchFetch[0]) {
      return this.state.searchFetch.map(dataObj => {
        return <GifList dataObj={dataObj} key={dataObj.id} />
      })
    }else{
      return this.state.theData.map(dataObj => {
        return <GifList dataObj={dataObj} key={dataObj.id} />
      })
    }
  }
  render() {
    return (
      <div>
        <GifSearch searchRequest={this.searchRequest}/>
        {this.renderData()}
      </div>
    )
  }
}

export default GifListContainer

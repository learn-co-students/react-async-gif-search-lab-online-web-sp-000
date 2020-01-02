import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      gifList: []
    }
  }

  gifFetchCallBack = query => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(gifList => {
        // console.log(gifList.data)
        this.setState({
          gifList: gifList.data
        })
      })
      .catch(error => console.log(error))
  }

  gifListGenerator = () => {
    return(
        this.state.gifList.map(gif => {
        return <GifList key={gif.id} gifItem={gif} /> 
      })
    )
  }

  render() {
    return(
      <div>
        <GifSearch gifSearch={this.gifFetchCallBack}/>
        {this.gifListGenerator()}
      </div>
    )
  }


}

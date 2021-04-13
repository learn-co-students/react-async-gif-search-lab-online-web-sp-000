import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor() {
    super();

    this.state = {
        gifs: []
    };
  }

  componentDidMount() {
    this.fetchURLs()
  }

  fetchURLs = (searchTerm = "") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}}&api_key=Oo3pE9VnlVsbOsH9vVcHk19ff8fQ4VIs&rating=g`)
      .then(response => response.json())
      .then(gifData => {
        this.setState({
          gifs: gifData.data.map(gif =>  gif.images.original.url )
        })
      })
  }
  
  render() {
    

    return (
        <div>
            <GifSearch fetchURLs={this.fetchURLs}/>
            <GifList gifs={this.state.gifs} />
        </div>
        
    )
  }
  
}


export default GifListContainer;

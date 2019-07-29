import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  handleSubmit = query => {
    // get the data here and setState
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data =>{
        this.setState({
          gifs: data.data.slice(0,3)
        })
      })
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    //fetch for keyword
    //event.target.keyword.value);
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q=${event.target.keyword.value}`)
      .then(resp => resp.json())
      .then(json => {
        const gif_array = [];

        for (let i = 0; i < 3; i++) {
          gif_array.push(json.data[i].images.original.url);
        }

        this.setState({
          gifs: gif_array
        });
      })
      .then(() => console.log(this.state.gifs));
  }

  render() { 
    return (
      <div>
        <GifSearch handleSubmit={this.handleFormSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
 
export default GifListContainer;
import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ''
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((res) => res.json())
      .then((gifs) => {
        this.setState({
          gifs: gifs.data.slice(0, 3)
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

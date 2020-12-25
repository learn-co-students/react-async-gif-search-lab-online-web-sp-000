import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  handleSearch = (search) => {
    const url = (search === undefined)
      ? "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=PMqoE7YNN5jADY9GFNK7V9BU9n3TbplB&rating=g&limit=3"
      : `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=PMqoE7YNN5jADY9GFNK7V9BU9n3TbplB&rating=g&limit=3`;

    fetch(url)
      .then(resp => resp.json())
      .then(({ data }) => this.setState({ gifs: data.map(data => data.images.original.url) }))
      .catch((error) => console.error('Error:', error));
  };

  render() {
    return (
      <div className="main container">
        <GifSearch handleSearch={this.handleSearch} />
        <br></br>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  componentDidMount() {
    this.handleSearch();
  }

}

export default GifListContainer;

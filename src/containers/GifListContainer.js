import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  handleSubmit = (searchTerm) => {
    const threeGifs = [];
    const fetchRequestString = `${this.props.urlBase}search?q=${searchTerm}&api_key=${this.props.apiKey}&rating=g`
    fetch(fetchRequestString)
      .then(response => response.json())
      .then(json => {
        for(let i = 0; i < 3; i++) {
          threeGifs.push(json.data[i].images.original.url);
        }
        this.setState({
          gifs: threeGifs
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch submitHandler={this.handleSubmit} />
        <GifList gifURLs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;

import React, { Component } from 'react';
import API_KEY from '../keys';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${API_KEY}&limit=3`)
      .then(res => res.json())
      .then(data => (
        this.setState({
          gifs: data.data
        })
      ));
  }

  onChange = (e) => {
    const searchTerm = e.target.value
    this.setState({
      searchTerm
    })
  }

  render() {
    return (
      <div>
        <div className="container d-flex flex-column">
          <GifSearch handleSubmit={this.handleSubmit} onChange={this.onChange} />
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default GifListContainer;

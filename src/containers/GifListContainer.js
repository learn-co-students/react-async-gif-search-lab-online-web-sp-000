import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=xC2HmpsCEvo4xGFDhWC3P9KwWTW1B7Lt&rating=g')
      .then(resp => resp.json()).then(json => {
        this.setState({
          data: json.slice(0, 3)
        });
      });
  }

  handleSubmit(data) {
    console.log(data)
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.data} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

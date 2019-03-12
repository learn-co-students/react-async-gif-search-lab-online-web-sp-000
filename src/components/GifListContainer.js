import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default class GifListContainer extends Component {
  state = { gifs: [] };

  search(query) {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(json => {
        let images = json.data.map(item => item.images.original.url);
        this.setState({ gifs: images.slice(0, 3) });
      });
  }

  render() {
    return (
      <div className="container">
        <GifSearch submitHandler={query => this.search(query)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

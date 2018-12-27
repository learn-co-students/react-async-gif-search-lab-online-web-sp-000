import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  fetchFunction = searchTerm => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        // let data = args.data;
        this.setState({ gifs: data });
      });
  };

  componentDidMount() {
    this.fetchFunction();
  }
  // gifs.slice(0,3)

  render() {
    // console.log(this.state.gifs);
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchFunction={this.fetchFunction} />
      </div>
    );
  }
}

export default GifListContainer;
// In our app the < GifListContainer /> will be responsible for fetching the data
// from the giphy api, storing the first 3 gifs from the response in its
// component state, and passing that data down to it's child the < GifList >
// component as a prop.

// It will also render a < GifSearch /> component that renders the form.
// < GifListContainer /> should pass down a submit handler function to<GifSearch />
// as a prop.

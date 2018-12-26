import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ""
  };

  componentDidMount(searchTerm) {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(({ gifs }) => this.setState({ gifs: gifs }));
  }

  // gifs.slice(0,3)

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.state;
  // };

  // changeSearchTerm = input => {
  //   console.log(input.value);
  //   this.setState({ searchTerm: input.value });
  // };

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        {/* <GifSearch>changeSearchTerm={this.changeSearchTerm}</GifSearch> */}
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

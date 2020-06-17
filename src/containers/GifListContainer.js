import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: {}
    };
  }
  handleSubmit = text => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=m1gj75VMX4u5lIn7cx7WVwGKtCtbB99c&rating=g`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          gifs: data
        })
      );
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

import React, { PureComponent } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      searchResults: [],
    };
  }

  searchSubmit = (searchTerm) => {
    this.getData(searchTerm);
  }

  getData = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.props.apiKey}&q={${searchTerm}&limit=3&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(data => {
      console.log("DATA:",data.data)
      this.setState({
        searchResults: data.data
      })
    });
}

  render() {
    console.log("GifList");
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
        <div>
          <GifList searchData={this.state.searchResults}/>
        </div>
        <div>
          < GifSearch onSearch={this.searchSubmit}/>
        </div>
      </div>
    );
  }
}

export default GifListContainer;

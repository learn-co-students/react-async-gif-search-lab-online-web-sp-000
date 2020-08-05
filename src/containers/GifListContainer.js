import React, { Component } from "react";
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

export default class GifListContainer extends Component {
  //https://api.giphy.com/v1/gifs/search?q=SEARCHTERM&api_key=Ig4Hj4mHXAYY2SzslETLM0F9hzF955sn&rating=g
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.fetchGifsFromApi();
  }

  fetchGifsFromApi= (term="dog") => {
    fetch(this.createSearchLink(term))
    .then(response => response.json())
    .then(gifsJson => this.addGifsToState(gifsJson.data))
  }

  addGifsToState = (gifsJson) => {
    let gifs = [];
    for (let i = 0; i < 3; i++) {
      gifs.push(gifsJson[i].images.original.url);
    }
    this.setState({
      list: gifs
    })
  }

  createSearchLink(searchTerm) {
    return `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Ig4Hj4mHXAYY2SzslETLM0F9hzF955sn&rating=g`;
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.list}/>
        <GifSearch updateSearch={this.fetchGifsFromApi} />
      </div>
    );
  }
}
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      imageUrls: []
    }
  }

  fetchGifs = (query) => {
    const URL = 'https://api.giphy.com/v1/gifs/search?q=';
    const KEY = 'N60AX8ipzYThICZaaQNj5SfvHYcbq4HW';
    const TAIL = `&api_key=${KEY}&limit=3`;
    const request_url = `${URL}${query}${TAIL}`;
    //https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g
    console.log(`fetching ${query}`);

    fetch(request_url)
      .then(response => response.json())
      .then(json => {
        console.log(json.data);
        this.setState({
          imageUrls: json.data.map(gif => gif.images.original.url)
        })
      })
      .catch(errors => console.error(errors))
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList urls={this.state.imageUrls}/>
      </div>
    )
  }
}

export default GifListContainer

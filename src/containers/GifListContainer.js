import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
    searchTerm: "",
    returnGifs: ""
  };

  handleChange = (e) =>
    this.setState({ searchTerm: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(jsonResponse => jsonResponse.data.slice(0, 3).map(gif => gif.images.original.url))
      .then(gifs => {
        this.setState({
          returnGifs: gifs
        }, () => console.log(this.state))
      })

  }

 //  fetch('http://api.open-notify.org/astros.json')
 //     .then(response => response.json())
 //     .then(data => {
 //       this.setState({
 //         peopleInSpace: data.people
 //       })
 //     })
 // }


  componentDidMount() {

  }

  render() {
    return (
      <div>
      <div>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
        <div>
          <GifList
            gifs={this.state.returnGifs}
          />
        </div>
      </div>
    );
  }
}

export default GifListContainer;

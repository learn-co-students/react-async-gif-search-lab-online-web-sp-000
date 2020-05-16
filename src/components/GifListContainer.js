import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {

  state = {
    firstThreeGifs: []
  }

  fillFirstThreeGifsArray = (jsonizedResponse) => {
    let newStateGifsArray = this.state.firstThreeGifs.slice();
    newStateGifsArray.push(jsonizedResponse.data[0].images.original.url);
    newStateGifsArray.push(jsonizedResponse.data[1].images.original.url);
    newStateGifsArray.push(jsonizedResponse.data[2].images.original.url);
    this.setState({firstThreeGifs: newStateGifsArray});
    console.log(this.state, "line 17");
    document.getElementById("inputField").value = ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({firstThreeGifs: []});
    //https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
    fetch('https://api.giphy.com/v1/gifs/search?q=' + `${document.getElementById("inputField").value}` + '&api_key=X3HcQ3IG4g15ldOSjP1uWDbpRq0O2PhS&rating=g')
    .then(response => response.json())
    .then(jsonizedResponse => this.fillFirstThreeGifsArray(jsonizedResponse))
  }


// <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.


  // componentDidMount() {
  //   fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=X3HcQ3IG4g15ldOSjP1uWDbpRq0O2PhS&rating=g')
  //   .then(response => response.json())
  //   .then(jsonizedResponse => this.fillFirstThreeGifsArray(jsonizedResponse))
  // }

  render() {
    return (
      <div>
        <GifList theThreeGifs={this.state.firstThreeGifs} />
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

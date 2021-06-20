// The <GifSearch /> component will render a form that receives
// the user input for the Giphy search. The text input should be
// a controlled component that stores the value of the input in 
// its component state and renders the DOM accordingly. 
// The React component is always in charge of what the DOM looks like.

// <GifSearch /> should receive a callback prop from its parent.
// On a submit event, it should invoke that callback prop with
// the value of the text input. It is this callback function, 
// defined in <GifListContainer />, that will actually query the API 
// with the text the user has entered.

import React, { Component } from 'react'

class GifListContainer extends Component {
  state = {
    searchTerm: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchTerm}></input>
      </form>
    )
  }
}

export default GifListContainer
import React, { Component } from 'react'


export default class GifSearch extends React.Component {

    state = {
        query: ''
    }
 
    handleSubmit = event => {
        event.preventDefault()
        this.props.submitHandler(this.state.query)
      }


// Render a form that receives the user input for the giphy search. 
// The text input should be a _controlled component_ that
// stores the value of the input in its component state and renders the DOM
// accordingly. 
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              Enter a Search Term: <br />
              <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} /><br />
              <button type='submit'><b>Find Gifs</b></button>
            </form>
          </div>
        )
      }

}

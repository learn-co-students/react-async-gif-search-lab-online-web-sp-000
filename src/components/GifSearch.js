import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

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

export default GifSearch
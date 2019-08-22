import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleClick = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div  className="search-container">
        <p>Enter a search term:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} /><br></br>
          <button onClick={this.handleClick}>Find Gifs</button>
        </form><br></br>
      </div>
    )
  }

}

export default GifSearch
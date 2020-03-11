import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImages(this.state.query)
  }

  render() {
    return (
      <div>
        <h4>Enter your search here below:</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
          </form>
      </div>
    )
  }

}

export default GifSearch
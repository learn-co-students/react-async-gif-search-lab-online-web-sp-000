import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    searchApi: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.search(this.state.searchApi)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchApi} onChange={event => this.setState({searchApi: event.target.value})} />
        </form>
      </div>
    )
  }

}

export default GifSearch
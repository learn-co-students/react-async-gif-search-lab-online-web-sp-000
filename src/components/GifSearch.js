import React, { Component } from 'react'

class GifSearch extends Component {
  state = { q: ""}

  handleSubmit = event => {
    event.preventDefault()
    this.props.getImgs(this.state.q)
  }

  render() {
    return (
      <div class="col">
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.q} onChange={event => this.setState({q: event.target.value})} />
        <input type="submit"/>
      </form>
      </div>
    )
  }
}



export default GifSearch

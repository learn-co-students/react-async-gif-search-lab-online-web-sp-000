import React, { Component } from 'react'

export class GifSearch extends Component {
  state = {
    query: ''
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.query)
    this.setState({ query: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.query} onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch

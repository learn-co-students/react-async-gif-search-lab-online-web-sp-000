import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.input = React.createRef()
    this.state = { query: '' }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.query}
          ref={this.input}
        />
        <input
          type="submit"
          value='Search'
        />
      </form>
    )
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.query.length > 0) {
      this.props.getGifs(this.state.query)
      this.setState({ query: '' })
    }
    this.input.current.focus()
  }

  componentDidMount() {
    this.input.current.focus()
  }
}

export default GifSearch

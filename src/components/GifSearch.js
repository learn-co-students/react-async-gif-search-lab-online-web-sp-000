import React from 'react'

export default class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.sendSearchTerm(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form  onSubmit={event => this.handleSubmit(event)}>
          Search me:<br />
          <input type='text' value={this.state.searchTerm} onChange={ event => this.handleChange(event) }/><br />
          <button type='submit'>Find a Gif!</button>
        </form>
      </div>
    )
  }
}

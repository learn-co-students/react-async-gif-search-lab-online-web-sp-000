import React from 'react'

class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.search) {
      return this.props.submitHandler(this.state.search)
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Search Term
            <input
              type="text"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.handleInputChange}
            />
          </label>
          <div>
            <button type="submit">Submit Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default GifSearch
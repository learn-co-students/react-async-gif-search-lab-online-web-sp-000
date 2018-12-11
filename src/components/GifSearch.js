import React, {Component} from 'react'


class GifSearch extends Component {

  state = {
    theSearch: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchRequest(this.state.theSearch)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='submit' value="Search"  />
          <input
            type="text"
            value={this.state.theSearch}
            onChange={event => this.setState({theSearch: event.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default GifSearch

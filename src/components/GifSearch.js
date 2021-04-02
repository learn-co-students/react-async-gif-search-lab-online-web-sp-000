import React, {Component} from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetch(this.state.query)
  }

  handleInput = event => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter a search term:</label>
        <br/>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInput}
        />
        <br/><br/>
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }

}

export default GifSearch

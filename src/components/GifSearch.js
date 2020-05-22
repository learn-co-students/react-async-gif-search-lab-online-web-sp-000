import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: "",
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onFindGiphysClick(this.state.query)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" onChange={event => this.handleChange(event)}
            value={this.state.query} />
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}

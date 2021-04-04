import React, { Component} from 'react';

export default class GifSearch extends Component {

  constructor() {
    super()
    this.state = ({
      query: ''
    })
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.query)
  }

  handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.props.handleSearch(this.state.query)
  }
}

  render() {
    return (
      <div>
        <input type="text" name="query" value={this.state.query} onChange={this.updateQuery} onKeyPress={this.handleKeyPress} />
        <input type="submit" onClick={this.handleSubmit}  />
      </div>
    )
  }
}

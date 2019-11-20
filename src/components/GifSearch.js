import React, {Component} from 'react'

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleQueryChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={(event, data) => this.props.submitHandler(event, this.state)}>
        <input
          type="text"
          onChange={event => this.handleQueryChange(event)}
          value={this.state.query}
        />
        <input type="submit" />
      </form>
    )
  }
}

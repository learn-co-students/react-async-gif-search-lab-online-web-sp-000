import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: ''
  }

  submit = event => {
    event.preventDefault()
    this.props.getGifList(this.state.query)
  } 

  render() {
    return(
      <div>
        <form onSubmit={this.submit}>
        <input type='text' value={this.state.query} onChange={(event) => this.setState({query: event.target.value}) }/>
        </form>
      </div>
    )
  }
}

export default GifSearch;

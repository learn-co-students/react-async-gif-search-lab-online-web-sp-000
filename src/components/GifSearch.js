import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFS(this.state.query)
  }

  render() {
    return(
      <div>

      </div>
    )
  }

}

export default GifSearch

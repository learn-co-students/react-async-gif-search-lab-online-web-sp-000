import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() { 
    return ( 
      <div>
        <form 
          onSubmit={this.handleSubmit}
        />
        <input 
          type="text" 
          value={this.state.searchTerm} 
          onChange={this.handleChange}>
        </input>
        <button>Search</button>
      </div>
     );
  }
}
 
export default GifSearch;



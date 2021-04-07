import React, { Component } from 'react'
 
class GifSearch extends Component {
 
  render() {
      
    return (
      <div>
          <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={event => this.props.handleSearch(event)}
            value={this.props.parentState.searchWord}
          />
           </form>
      </div>
    )
  }
}
 
export default GifSearch;
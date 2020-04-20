import React, { Component } from 'react'

export default class GifSearch extends Component {
  render(){
    return(
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input
            type='text'
            name='term'
            onChange={event => this.props.handleTermChange(event)}
            value={this.props.term}
          />
          <input type='submit' value='Find Gifs' />
        </form>
      </div>
    )
  }
}
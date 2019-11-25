import React, { Component } from 'react'

export default class GifSearch extends Component {

  constructor() {
    super();

    this.state = { input: '' }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.input);
  };
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>Enter a Search Term: </div>
        <input type='text' onChange={event => this.setState({ input: event.target.value })} />
        <div><button className='btn btn-success' type='submit'>Find Gifs</button></div>
      </form>
    )
  }

};

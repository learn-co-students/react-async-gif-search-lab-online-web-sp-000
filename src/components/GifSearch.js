import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor(props){
    super(props)
    this.state = {search: ''}
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getGifs(this.state.search)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input id="search" name="search" value={this.state.search} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    )
  }
}
import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor(props){
    super(props)
    this.state = {search: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
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

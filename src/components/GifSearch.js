import React from 'react';

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Enter a Search Term: </h3>
        <input type='text' name='query' value={this.state.query} onChange={this.handleChange}/>
        <input type='submit'value='FindGifs'/>
      </form>
    );
  }
}

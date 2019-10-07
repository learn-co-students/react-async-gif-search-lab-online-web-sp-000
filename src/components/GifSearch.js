import React from 'react';

export default class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Enter a Search Term: </h3>
          <input type='text' name='query' value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
        </form>
      </div>
    );
  }
}

import React from 'react'

//import GifListContainer from '../containers/GifListContainer'

class GifSearch extends React.Component {
  state = {
    query: '',
  }

  handler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetcher(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="query" value={this.state.query} onChange={event => this.handler(event)} />
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default GifSearch

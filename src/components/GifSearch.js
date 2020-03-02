import React from 'react'

import GifListContainer from '../containers/GifListContainer'

class GifSearch extends React.Component {
  state = {
    query: this.props.query,
    submittedData: []
  }

  constructor(props){
    super(props);
  }

  handler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let formData = { query: this.state.query }

    let dataArray = this.state.submittedData.concat(formData);
    this.setState({submittedData: dataArray});
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return (
        <div>
          {data.query}
        </div>
      )
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="query" value={this.state.query} onChange={event => this.handler(event)} />
        <input type="submit" value="Submit" />
      </form>
      //{this.listOfSubmissions()}
    );
  }
}

export default GifSearch

import React from 'react';
 
class GifSearch extends React.Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Enter a Search Term</label>
          <input
            type="text"
            onChange={event => this.setState({query: event.target.value})}
            value={this.state.query}
          />
          </div>
          <div>
            <button type="submit">Find Gifs</button>
          </div>
        </form>
      </div>
    )
  }
}
 
export default GifSearch

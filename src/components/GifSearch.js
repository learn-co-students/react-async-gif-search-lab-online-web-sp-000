import React from 'react';

class GifSearch extends React.Component {

  state = {
    searchValue: ""
  }

  handleChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.props.submit(this.state.searchValue)}>
          <div class="form-group">
            <label for="search">Enter a Search Term:</label><br />
            <input
              id="search"
              type="text"
              name="search"
              onChange={event => this.handleChange(event)}
              value={this.state.searchValue}
            />
          </div>
          <button type="submit" class="btn btn-primary">Find GIFs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch;

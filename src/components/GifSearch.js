import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }
  handleChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchText);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.searchText}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default GifSearch;

import React, { Component } from "react";

export default class GifSearch extends Component {
  state = { query: "cat" };

  onChange(event) {
    event.persist();
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault()
          this.props.submitHandler(this.state.query);
        }}
      >
        <input
          name="query"
          value={this.state.query}
          onChange={event => this.onChange(event)}
        />
        <input type="submit" />
      </form>
    );
  }
}

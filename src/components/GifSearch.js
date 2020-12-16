import React, { Component } from "react";

class GifSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {input: ''};
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  eventHandler = event => {
    event.preventDefault();
    this.props.submitHandler(this.state.input);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.eventHandler}>
          <input type="text" name="input" value={this.state.input} onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default GifSearch;

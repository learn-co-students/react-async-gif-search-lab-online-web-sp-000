import React from "react";


class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {query: ""}
    }

    handleChange = event => {
      this.setState({
        query: event.target.value
      })///remember can't access the new state until re-render
    }

    // componentDidUpdate() {
    //   console.log(this.state.query)
    // }
    handleSubmit = (event) =>{
      event.preventDefault();
      this.props.fetchGIFs(this.state.query)
    }

  render() {

    return (
      <form onSubmit= {event => this.handleSubmit(event)}>
      <input type ="text" name="query" value={this.state.query} onChange={event => this.handleChange(event)}/>
      </form>
    );
  };
};

export default GifSearch;

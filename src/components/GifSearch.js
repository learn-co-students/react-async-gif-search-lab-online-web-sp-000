import React from "react";

class GifSearch extends React.Component {

  state = {
    input: ""
  }

  handleChange = event =>
  {
this.setState({
  input: event.target.value
})
  }

submitHandler = event=>{
  event.preventDefault();
  this.props.fetchGIFs(this.state.input)
}

  render() {
    return (
    <form onSubmit={event => this.submitHandler(event, this.state.input)}>
    <input type="text" onChange={this.handleChange} value={this.state.input}></input>
    <button type="submit" >Find Gifs</button>
    </form>)
  }

}

export default GifSearch


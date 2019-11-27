import React from 'react';

class GifSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  changeInputValue(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state.searchTerm);
    this.props.submitHandler(this.state.searchTerm);
  }

  render() {
    return(
      <div>
        <form>
          <div><label>Enter a Search Term:</label></div>
          <input type="text" value={this.state.searchTerm} onChange={event => this.changeInputValue(event)}></input>
          <input type="submit" value="Find Gifs" onClick={event => this.submitHandler(event)}></input>
          <br />
          <br />
        </form>
      </div>
    )
  }
}

export default GifSearch

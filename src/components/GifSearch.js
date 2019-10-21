import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };


  }

    handleSubmit = (event) => {
      event.preventDefault() ;
      this.props.fetchGif(this.state.inputValue);
    }


  handleSearchInputChange = event => {
      this.setState({
      inputValue: event.target.value,
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a Search Term
          <input type="text" onChange={this.handleSearchInputChange}/>
        </label>
        <input type="submit" value="Find Gifs" />
      </form>
    );
  }
}


export default GifSearch

import React from 'react';

class GifSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        gifs: this.props.fetchURLs,
        input: ""
    };
  }

  handleClick = (event) => {
        event.preventDefault();
        console.log(this.props.fetchURLs)
        this.props.fetchURLs(this.state.input)
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };
  
  render() {
    

    return (
        <form onSubmit={this.handleClick}>
            <input value={this.state.input} onChange={this.handleChange}/>
            <button>Find Gifs</button>

        </form>
        
      
    )
  }
}

export default GifSearch;

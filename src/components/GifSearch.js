import React from 'react';

export default class GifSearch extends React.Component {
  state = {
    searchValue: ""
  }

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    })
  }

  submitted = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchValue);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.submitted}>
          <input value={this.state.searchValue} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
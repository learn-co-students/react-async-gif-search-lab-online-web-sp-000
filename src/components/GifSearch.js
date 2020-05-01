import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    data: ""
  }

  submitForm(e) {
    let upercaseData = this.state.data
    upercaseData.toUpperCase()
    e.preventDefault()
    this.props.getGifs(upercaseData)
  }

  render() {
    console.log(this.state, this.props)
    return (
      <div>
        <form onSubmit={(e)=> this.submitForm(e)}>
          <input type="text" value={this.state.data} onChange={(e)=>this.setState({data: e.target.value})}></input>
          <button>Enter</button>
        </form>



      </div>
    );
  }

}

export default GifSearch;
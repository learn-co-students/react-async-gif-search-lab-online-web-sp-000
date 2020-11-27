import React, { Component } from 'react';

export default class GifSearch extends Component {

  state = {
      q: ""
  }

  componentDidMount() {
    console.log('GifSearch mounts')
  }

    formHandler = (e) => {
        e.preventDefault()
        console.log(this.state.q)
        this.props.containerFetch(this.state.q)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
        <
        input type="text" 
        value={this.state.q} 
        onChange = {e =>
            this.setState({q: e.target.value})
        }
        />
        </form>
      </div>
    )
  }
  
}
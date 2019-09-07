import React, { Component } from 'react'
 
export default class GifSearch extends Component {
 
 state = {
  q: ""
 }

 handleSubmit = event => {
  event.preventDefault();

  this.props.componentDidMount(this.state.q)

 }


  render() {
    return (
       <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.q} onChange={event => this.setState({q: event.target.value})} />
        </form>
    )
  }
 
  
}
 

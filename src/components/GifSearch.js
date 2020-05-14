  
import React, {Component} from 'react';


export default class GifSeach extends Component {
  constructor(){
    super()
    this.state = {
      search: ""
    }
   }

  updateState= (event) => {
    this.setState({search: event.target.value})
  }

  updateContainer = () => {
    this.props.updateSearch(this.state.search)
  }

  render(){
    return (<div className="gifSearch">
      <p>Search: <input onChange={this.updateState}/><button onClick={this.updateContainer}>Search</button></p>
    </div>)
  }
}
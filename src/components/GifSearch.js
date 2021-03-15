import React, {Component} from 'react'

export default class GifSearch extends Component {

  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render(){
    return (
      <div>
        <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
        <button type="submit" onClick={() => this.props.submitHandler(this.state.search)}>Search</button>
      </div>
    )
  }
}

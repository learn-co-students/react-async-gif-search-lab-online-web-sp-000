import React, {Component} from 'react'

export default class GifSearch extends Component {

  state = {
    value: ""
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  searchGif = (event) => {
    event.preventDefault()
    this.props.searchGif(this.state.value)
  }

  render() {
    
    return(
      <form onSubmit={this.searchGif}>
        <input value={this.state.value} onChange={this.handleChange}/>
        <button type='submit'>Find Gif</button>
      </form>
    )
  }
}
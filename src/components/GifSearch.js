import React, {Component} from 'react'


class GifSearch extends Component {

  constructor(props) {
    super(props)
      this.state ={
      searchInput: []
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={ (event) => this.props.searchGifs(event, this.state.searchInput) }>
          <input type='text' value={this.state.searchInput} onChange={ (event) => this.handleSearch(event) }></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default GifSearch;

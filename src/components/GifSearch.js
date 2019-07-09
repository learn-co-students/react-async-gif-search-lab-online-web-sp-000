import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  saveQuery = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmitForm = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
  }

  render() {
   return(
     <form onSubmit={this.handleSubmitForm}>
       <input type="text" name="search" value={this.state.searchTerm} onChange={this.saveQuery} />
       <button type="submit">Search</button>
     </form>
   )
 }

}

export default GifSearch

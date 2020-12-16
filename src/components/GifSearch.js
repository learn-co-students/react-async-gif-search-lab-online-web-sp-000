import React, { Component } from 'react'

class GiftSearch extends Component {

  formHandler = (e) => {
    e.preventDefault()

    this.setState({
      search: e.target['search'].value
    })

    this.props.query(e.target['search'].value)
  }

  render () {
    return (
      <div class="search">
        <form onSubmit={e => this.formHandler(e)}>
          <input type="text" name="search"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }

}

export default GiftSearch
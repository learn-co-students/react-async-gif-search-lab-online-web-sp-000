import React from 'react'
export default class GifSearch extends React.Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state.query)
  }

  changeHandler = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text' onChange={this.changeHandler} />
        <input type='submit' value='Search' />
      </form>
    )
  }
}

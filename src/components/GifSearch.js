import React from 'react'

export default class GifSearch extends React.Component {

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.gifSearch(event.target.querySelector("#search").value)
  }

  render() {
    return(
      <form onSubmit={this.onSubmitHandler}>
        <input id="search" type="text" />
        <input type="submit" value="Search" />
      </form>
    )
  }

}

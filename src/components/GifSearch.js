import React from 'react'

export default class GifSearch extends React.PureComponent {

  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="query" onChange={event => {
            this.setState({query: event.target.value})
            this.props.handleSearch(event)}} value={this.state.query} />
        </form>
      </div>
    )
  }
}

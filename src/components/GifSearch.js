import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={event => this.props.submitHandler(event, this.state.userInput)}>
        <div>
          <input type="text" onChange={event => this.handleInput(event)} value={this.state.userInput}/>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>

    )
  }
}

export default GifSearch

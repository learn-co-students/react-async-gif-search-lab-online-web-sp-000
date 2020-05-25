import React from 'react'

class GifSearch extends React.Component {
  //has submitHandler() prop
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      return this.props.submitHandler(this.state.search)
    }
  }

  // will render a form that receives the user input for the giphy search
  // Text input should be a controlled component that stores the value of the
  // input in its component state and renders the DOM accordingly.

  // should receive a callback prop from parent. 

  // on submit event, it should invoke that callback prop with the value of
  // the text input. It is this callback function, defined in GifListContainer,
  // that will query the API with the text the user has entered.


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Search Term
          <input 
            id="search"
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit Search</button>
      </div>
    </form>
    )
  }

}


export default GifSearch
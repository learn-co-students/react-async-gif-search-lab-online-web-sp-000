import React from 'react'

class GifSearch extends React.Component {

  state={
    keyword:''
  }

  handleChange=(e)=>{
    this.setState({
      keyword:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.search(this.state.keyword)
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:</label>
          <input onChange={this.handleChange}type="text"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default GifSearch;

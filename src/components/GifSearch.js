import React from 'react'


export default class GifSearch extends React.Component {
    state = { value: '' };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Enter a Search Term:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Find Gifs" onSubmit={this.handleSubmit}/>
      </form>
      )
    }
  }
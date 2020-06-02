import React, { Component } from "react"

class GifSearch extends Component {
	state = {
		search: ""
	}

	handleInputChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}

	handleSubmit = () => {
		this.props.onSubmitSearch(this.state.search)
	}

	render() {
		return (
			<div>
				<label>Enter search here:</label>
				<input onChange={this.handleInputChange} type="text" id="search-input" name="gif-search" value={this.state.search} />
				<button onClick={this.handleSubmit} >search gifs</button>			
			</div>
		)
	}
}

export default GifSearch;
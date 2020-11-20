import React from 'react';

class GifSearch extends React.Component {
	constructor() {
		super()

		this.state = {
			keyword: ""
		}
	}

	handleChange = event => {
		this.setState({
			keyword: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.searchGifs(this.state.keyword)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>
						Enter a Search Term:
						<br/>
						<input id="keyword" name="keyword" type="text" onChange={this.handleChange} value={this.state.search}/>
					</label>
				</div>
				<div>
					<button type="submit">Find Gifs</button>
				</div>
			</form>
		)
	}
}

export default GifSearch

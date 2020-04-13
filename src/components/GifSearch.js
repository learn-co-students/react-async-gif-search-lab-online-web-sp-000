import React from 'react'

export default class GifSearch extends React.Component {
	constructor() {
		super()
		this.state = {
			query: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: [event.target.value]
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.fetchGIFs(this.state.query)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="query" value={this.state.query} onChange={event => this.handleChange(event)} />
			</form>
		)
	}
}
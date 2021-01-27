import React, {Component} from 'react'

class GifSearch extends Component {

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<input type="text" />
				<button>Search</button>
			</form>)
	}
}

export default GifSearch
import React from "react";

class GifSearch extends React.Component {

	state = {
		searchTerm: ""
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.searchForGifs(this.state.searchTerm);
		this.setState({
			searchTerm: ""
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>
						Enter a Search Term:
					</label>
					<input type="text"
								 className="form-control"
								 value={this.state.searchTerm}
								 onChange={this.handleChange} />
					<button type="submit"
								 	className="btn btn-success">
						Find Gifs
					</button>
				</div>
			</form>
		);
	}

}

export default GifSearch;

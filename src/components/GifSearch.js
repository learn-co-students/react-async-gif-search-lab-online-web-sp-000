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
				<label>
					Enter a Search Term:
					{" "}
					<input type="text"
								 value={this.state.searchTerm}
								 onChange={this.handleChange} />
				</label>
				{" "}
				<input type="submit"
							 value="Find Gifs" />
			</form>
		);
	}

}

export default GifSearch;

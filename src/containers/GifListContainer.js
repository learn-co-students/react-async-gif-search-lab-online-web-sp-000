import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {

	state = {
		gifs: []
	}

	searchForGifs = searchTerm => {
		const url = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g";
		
		fetch(url)
			.then(response => response.json())
			.then(data => this.extractGifUrls(data));
	}

	extractGifUrls = data => {
		const firstThreeUrls = data.data.slice(0, 3).map(datum => datum.images.original.url);
		
		this.setState({
			gifs: firstThreeUrls
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-8">
						<GifList gifs={this.state.gifs} />
					</div>
					<div className="col-sm-4">
						<GifSearch searchForGifs={this.searchForGifs} />
					</div>
				</div>
			</div>
		);
	}

}

export default GifListContainer;

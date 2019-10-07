import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

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
			<div>
				<GifSearch searchForGifs={this.searchForGifs} />
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}

}

export default GifListContainer;

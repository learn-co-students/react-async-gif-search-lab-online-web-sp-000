import React, { Component } from "react"

class GifList extends Component {
	loadGifs = () => {
		console.log("loading gifs")
		
		if (this.props.firstThreeGifs.length != 0) {
			console.log(this.props.firstThreeGifs)

			return this.props.firstThreeGifs.map((gif) => <li key={gif.id} ><img src={gif.images.original.url} alt=""/></li>)
		}
	}

	render() {
		return (
			<ul>
				{this.loadGifs()}
			</ul>
		)
	}
}

export default GifList;
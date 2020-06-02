import React, { Component } from "react"
import GifList from "../components/GifList.js"
import GifSearch from "../components/GifSearch.js"

class GifListContainer extends Component {
	constructor() {
		super()
		this.state = {
			gifs: []
		}			
	}

	getGifs = (searchTerm) => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=vxOB39P1rm8XhMZMNaBZL3uub7WDN0VO&rating=g`)
			.then(resp => resp.json())
			.then((obj) => {
				let gifs = []
				for (let i = 0; i < 3; i++) {
					gifs.push(obj.data[i])					
				}

				console.log(gifs)

				this.setState({
					gifs: gifs
				}, console.log(this.state.gifs))
			})
	}

	render() {
		return(
			<div>
				<GifSearch onSubmitSearch={this.getGifs} />			
				<GifList firstThreeGifs={this.state.gifs} />
			</div>
		)

	}
}

export default GifListContainer;
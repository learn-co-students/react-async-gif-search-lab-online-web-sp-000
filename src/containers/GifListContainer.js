import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			gifs: []
		}
	}

	componentDidMount() {
		this.searchGifs()
	}

	searchGifs = (keyword = "") => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=2xxRmDJ4C3tXazlogwiPdgJpGEKpCZ2g&rating=g`)
		.then(resp => resp.json())
		.then(object => {
			this.setState({
				gifs: object.data.slice(0,3).map(obj => obj.images.original.url)
			})
		})
		.catch(error => {
			console.error('Error', error)
		})
	}

	render() {
		return(
			<div>
				<GifSearch searchGifs={this.searchGifs}/>
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}
}

export default GifListContainer

// qUc1vbRCiCVIfJa0rXvUwYbkPN3J9HSi
import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gifs: []
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.fetchGifs(event.target[0].value)
	}

	fetchGifs(word) {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=qUc1vbRCiCVIfJa0rXvUwYbkPN3J9HSi&rating=g`)
			.then(resp => resp.json())
			.then(json => json.data.slice(0,3))
			.then(gifs => {
				this.setState({gifs: gifs})
			})
	}

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs} />
				<GifSearch handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default GifListContainer
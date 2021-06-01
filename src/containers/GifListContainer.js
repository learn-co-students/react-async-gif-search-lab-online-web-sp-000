import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
	state = {
		gifs: []
	}

	fetchGifs = (query = "apple") => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=XDYcQPXGz1URsfqa3QLyvVkEqXm3BeXg&rating=g&limit=3`)
			.then(resp => resp.json())
			.then(({data}) => {
				this.setState({ gifs: data.map(gif => ({url: gif.images.original.url}))})
			})
	}

	componentDidMount(){
		this.fetchGifs()
	}

	render(){
		return(
			<div>
				<GifSearch fetchGifs={this.fetchGifs} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}
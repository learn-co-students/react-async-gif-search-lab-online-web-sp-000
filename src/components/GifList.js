import React from 'react';

class GifList extends React.Component {

	render() {
		return (
			<ul>
				{this.props.gifs.map((gif, id) => <img key={id} src={gif}/>)}
			</ul>
		)
	}
}

export default GifList

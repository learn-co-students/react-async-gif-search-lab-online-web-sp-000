import React from "react";

function GifList(props) {

	return (
		<ul>
			{props.gifs.map((gif, index) => {
				return (
					<li key={index}>
						<img src={gif}
								 alt={""} />
					</li>
				);
			})}
		</ul>
	);

}

export default GifList;

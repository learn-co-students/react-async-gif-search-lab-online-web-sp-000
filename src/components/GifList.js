import React from "react";

class GifList extends React.Component {

    state = {
       
    }

    render() {
        const thisGif = this.props.gifs.map(gif => `<li><img> src="${gif}></li>`)
        return (
        <div>
            <ul>
                <li>

                </li>
            </ul>
        </div>
        );
    }

}

export default GifList;
import React, { Component } from "react";

class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map(gif => <p><img src={gif} alt="gif"/></p>)}
            </div>
        );
    }
}

export default GifList;